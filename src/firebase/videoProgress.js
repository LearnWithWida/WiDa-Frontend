import { db } from './config';
import { doc, setDoc, getDoc, collection } from 'firebase/firestore';

export const saveVideoProgress = async (userId, videoData) => {
  try {
    console.log('Saving video progress for user:', userId, 'Data:', videoData);
    const userProgressRef = doc(db, 'videoProgress', userId);
    await setDoc(userProgressRef, {
      videos: videoData,
      lastUpdated: new Date().toISOString()
    }, { merge: true });
    console.log('Progress saved successfully');
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getVideoProgress = async (userId) => {
  try {
    const userProgressRef = doc(db, 'videoProgress', userId);
    const docSnap = await getDoc(userProgressRef);
    
    if (docSnap.exists()) {
      return docSnap.data().videos;
    }
    return null;
  } catch (error) {
    console.error('Error getting progress:', error);
    return null;
  }
}; 