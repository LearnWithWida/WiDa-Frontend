import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/config';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Google from "../assets/google.png"
import './SignUp.css';
import defaultAvatar from '../assets/avatar.jpg'; 

// Initialize EmailJS
emailjs.init("eGfeOXpr2avwHqpud");

const SignUp = () => {
  const navigate = useNavigate();
  const { user, googleSignIn } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');

  // Redirect if user is already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const sendVerificationEmail = async (userEmail, code) => {
    try {
      const templateParams = {
        to_email: userEmail,
        from_name: "LearnWithWida",
        to_name: fullName,
        verification_code: code,
        reply_to: userEmail
      };

      const response = await emailjs.send(
        'service_fc05pxq',
        'template_f5baibd',
        templateParams,
        'eGfeOXpr2avwHqpud'
      );

      if (response.status === 200) {
        toast.success('Verification code sent to your email!');
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send verification code');
      throw error;
    }
  };

  const handleInitialSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Basic validation
      if (!fullName || !email || !password) {
        toast.error('Please fill in all fields');
        return;
      }

      if (password.length < 6) {
        toast.error('Password should be at least 6 characters');
        return;
      }

      // Generate verification code
      const code = generateVerificationCode();
      setGeneratedCode(code);

      // Send verification email
      await sendVerificationEmail(email, code);

      // Show verification code input
      setShowVerification(true);
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to start verification process');
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Verify the code
      if (verificationCode !== generatedCode) {
        toast.error('Invalid verification code');
        return;
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update user profile with full name and default avatar
      await updateProfile(userCredential.user, {
        displayName: fullName,
        photoURL: defaultAvatar
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

        {!showVerification ? (
          <form className="signup-form" onSubmit={handleInitialSubmit}>
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
              {loading ? 'Sending Code...' : 'Get Verification Code'}
            </button>
          </form>
        ) : (
          <form className="signup-form" onSubmit={handleEmailSignUp}>
            <input 
              type="text" 
              placeholder="Enter Verification Code" 
              required 
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <button 
              type="submit" 
              className="signup-submit-btn"
              disabled={loading}
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
            <p className="resend-code" onClick={handleInitialSubmit}>
              Didn't receive the code? Send again
            </p>
          </form>
        )}

        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
