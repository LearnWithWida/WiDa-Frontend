import { createContext, useContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/config';
import { db } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Create the context
const AuthContext = createContext({});

// Custom hook to use the auth context
export function useAuth() {
  return useContext(AuthContext);
}

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Sign up function
  const signup = async (email, password, fullName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: fullName
      });
      setUser(userCredential.user);
      return userCredential;
    } catch (error) {
      throw error;
    }
  };

  // Google sign in function
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Sign in function
  const signIn = async (email, password, notify) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      if (notify) {
        notify(`Welcome back, ${result.user.email}!`);
      }
      return result;
    } catch (error) {
      throw error;
    }
  };

  // Sign out function
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      throw error;
    }
  };

  // Reset password function
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const handlePurchase = async (courseName, notify) => {
    try {
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      const userData = userDoc.data() || {};
      
      // Update purchases in Firebase
      await setDoc(userRef, {
        ...userData,
        purchases: {
          ...(userData.purchases || {}),
          [courseName]: {
            purchaseDate: new Date().toISOString()
          }
        }
      });

      if (notify) {
        notify(`✨ Enrolled in ${courseName.split(' ')[0]} course!`);
      }
    } catch (error) {
      throw error;
    }
  };

  const getUserPurchases = async () => {
    if (!user) return {};
    const userRef = doc(db, 'users', user.uid);
    const userDoc = await getDoc(userRef);
    return userDoc.data()?.purchases || {};
  };

  // Context value
  const value = {
    user,
    loading,
    signup,
    signIn,
    googleSignIn,
    logout,
    resetPassword,
    handlePurchase,
    getUserPurchases
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};