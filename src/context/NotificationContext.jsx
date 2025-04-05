import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { doc, setDoc, getDoc, onSnapshot } from 'firebase/firestore';
import { useAuth } from './AuthContext';

const NotificationContext = createContext();

export const useNotifications = () => useContext(NotificationContext);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setNotifications([]);
      return;
    }

    const userRef = doc(db, 'users', user.uid);
    const unsubscribe = onSnapshot(userRef, 
      (doc) => {
        const userData = doc.data();
        if (userData?.notifications) {
          setNotifications(userData.notifications);
        }
      },
      (error) => {
        console.error('Error fetching notifications:', error);
        // Fallback to empty notifications on error
        setNotifications([]);
      }
    );

    return () => unsubscribe();
  }, [user]);

  const addNotification = async (message) => {
    if (!user) return;

    try { 
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() || {};

      const newNotification = {
        id: Date.now(),
        message,
        time: new Date().toISOString(),
        unread: true
      };

      const updatedNotifications = [
        newNotification, 
        ...(userData.notifications || [])
      ].slice(0, 5);

      await setDoc(userRef, {
        ...userData,
        notifications: updatedNotifications
      }, { merge: true });
    } catch (error) {
      console.error('Error adding notification:', error);
    }
  };

  const markAsRead = async (id) => {
    if (!user) return;

    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    const userData = userDoc.data() || {};

    const updatedNotifications = userData.notifications.map(notif =>
      notif.id === id ? { ...notif, unread: false } : notif
    );

    await setDoc(userRef, {
      ...userData,
      notifications: updatedNotifications
    });
  };

  const clearNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const markAllAsRead = async () => {
    if (!user) return;

    try {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() || {};

      // Update all notifications to be marked as read
      const updatedNotifications = (userData.notifications || []).map(notif => ({
        ...notif,
        unread: false
      }));

      // Update Firestore with all notifications marked as read
      await setDoc(userRef, {
        ...userData,
        notifications: updatedNotifications
      }, { merge: true });

      // Update local state
      setNotifications(updatedNotifications);
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  };

  const value = {
    notifications,
    addNotification,
    markAsRead,
    clearNotification,
    markAllAsRead
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}; 