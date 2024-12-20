import { db } from '../firebase/config';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';

export const examTrackingService = {
  async saveExamAttempt(userId, courseId, examId, score) {
    if (!userId) return false; 
    
    try {
      const examAttemptRef = doc(db, 'examAttempts', `${userId}_${courseId}_${examId}`);
      await setDoc(examAttemptRef, {
        userId,
        courseId,
        examId,
        score,
        attemptDate: new Date().toISOString()
      });
      return true;
    } catch (error) {
      console.error('Error saving exam attempt:', error);
      return false;
    }
  },

  // Check if user has attempted exam
  async hasAttemptedExam(userId, courseId, examId) {
    if (!userId) return false; // Handle unauthenticated users gracefully
    
    try {
      const examAttemptRef = doc(db, 'examAttempts', `${userId}_${courseId}_${examId}`);
      const examAttempt = await getDoc(examAttemptRef);
      return examAttempt.exists();
    } catch (error) {
      console.error('Error checking exam attempt:', error);
      return false; // Assume no attempt if there's an error
    }
  }
}; 