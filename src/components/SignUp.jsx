import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Google from "../assets/google.png"
import './SignUp.css';
import defaultAvatar from '../assets/avatar.jpg'; // Add your default avatar image

const SignUp = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with full name and default avatar
      await updateProfile(userCredential.user, {
        displayName: fullName,
        photoURL: defaultAvatar // Add default avatar
      });

      toast.success('Account created successfully!');
      navigate('/'); // Redirect to home after successful signup
    } catch (error) {
      console.error('Error signing up:', error);
      let errorMessage = 'Failed to create account';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email already in use';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/weak-password':
          errorMessage = 'Password should be at least 6 characters';
          break;
        default:
          errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <ToastContainer />
      
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Master data analysis with expert-led courses.</p>
        
        <button className="google-signin-btn" onClick={googleSignIn}>
          <img src={Google} alt="Google" />
          Sign up with Google
        </button>
        
        <div className="divider">
          <span>or</span>
        </div>

        <form className="signup-form" onSubmit={handleEmailSignUp}>
          <input 
            type="text" 
            placeholder="Full Name" 
            required 
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Email" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="signup-submit-btn"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
