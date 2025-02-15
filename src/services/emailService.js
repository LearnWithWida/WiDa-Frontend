import { functions } from '../firebase/config';
import { httpsCallable } from 'firebase/functions';

export const sendFeedback = async (data) => {
  try {
    const sendEmail = httpsCallable(functions, 'sendEmail');
    const result = await sendEmail({
      name: data.name,
      email: data.email,
      message: data.message
    });
    return result.data;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
