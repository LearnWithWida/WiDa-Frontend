import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from '../context/AuthContext';

const examService = {
  async checkExamCompletion(userId, courseId, examId) {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'examResults'),
          where('userId', '==', userId),
          where('courseId', '==', courseId),
          where('examId', '==', Number(examId))
        )
      );
      
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking exam completion:', error);
      throw error;
    }
  },

  async getExamResult(userId, courseId, examId) {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'examResults'),
          where('userId', '==', userId),
          where('courseId', '==', courseId),
          where('examId', '==', Number(examId))
        )
      );
      
      if (!querySnapshot.empty) {
        return querySnapshot.docs[0].data();
      }
      return null;
    } catch (error) {
      console.error('Error getting exam result:', error);
      throw error;
    }
  },

  async saveExamResult(userEmail, userId, courseId, examId, score) {
    try {
      // Save to Firebase
      const examResult = {
        userEmail,
        userId,
        courseId,
        examId: Number(examId),
        score,
        timestamp: new Date().toISOString()
      };

      await addDoc(collection(db, 'examResults'), examResult);

      // Prepare data for Sheet.best
      const sheetData = [{  // Note: Wrapped in array brackets
        Email: userEmail,
        Score: `${Math.round(score)}%`,
        CourseID: courseId,
        ExamID: examId,
        Timestamp: new Date().toISOString()
      }];

      console.log('Attempting to save to Sheet.best:', sheetData);

      const response = await fetch('https://sheet.best/api/sheets/edb1d614-07e7-497d-86c0-02556c9f27c1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetData)
      });

      const responseText = await response.text();
      console.log('Sheet.best response:', responseText);

      if (!response.ok) {
        throw new Error(`Failed to save to Sheet.best: ${responseText}`);
      }

    } catch (error) {
      console.error('Error details:', {
        message: error.message,
        stack: error.stack,
        data: {
          userEmail,
          courseId,
          examId,
          score
        }
      });
    }
  }
};
export default examService;

