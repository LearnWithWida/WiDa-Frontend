import { db } from '../firebase/config';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const examService = {
  // Save exam result to Firebase
  async saveExamResult(userEmail, examData) {
    try {
      const examResult = {
        userEmail,
        examId: examData.examId,
        courseId: examData.courseId,
        score: examData.score,
        timestamp: new Date().toISOString(),
        answers: examData.userAnswers
      };

      await addDoc(collection(db, 'examResults'), examResult);

      // Call Google Sheets API
      await this.saveToGoogleSheets(examResult);

      return true;
    } catch (error) {
      console.error('Error saving exam result:', error);
      throw error;
    }
  },

  // Check if user has already taken the exam
  async hasUserTakenExam(userEmail, examId) {
    try {
      const q = query(
        collection(db, 'examResults'),
        where('userEmail', '==', userEmail),
        where('examId', '==', examId)
      );

      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking exam status:', error);
      throw error;
    }
  },

  // Save to Google Sheets using Google Sheets API
  async saveToGoogleSheets(examResult) {
    try {
      const response = await fetch('/api/saveToSheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(examResult),
      });

      if (!response.ok) {
        throw new Error('Failed to save to Google Sheets');
      }

      return true;
    } catch (error) {
      console.error('Error saving to Google Sheets:', error);
      throw error;
    }
  }
}; 