import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import { 
  signInWithRedirect, 
  GoogleAuthProvider, 
  getRedirectResult,
  signInWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';
import { auth } from '../firebase/config';
import dataAuth from '../assets/data-auth.png';
import Google from "../assets/google.png";
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css";

const Login = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    // Check for redirect result when component mounts
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result?.user) {
          toast.success('Login successful!');
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Redirect error:', error);
        toast.error('Failed to complete sign-in. Please try again.');
      }
    };

    handleRedirectResult();
  }, [navigate]);

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
    document.title = 'Login | Wida';
  }, [user, navigate]);

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      // Use redirect instead of popup
      await signInWithRedirect(auth, provider);
      // The page will redirect to Google sign-in
    } catch (error) {
      console.error('Sign-in error:', error);
      toast.error('Failed to start sign-in process. Please try again.');
      setLoading(false);
    }
  };

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check if email is verified
      if (!userCredential.user.emailVerified) {
        toast.error('Please verify your email before logging in');
        // Optionally, send another verification email
        await sendEmailVerification(userCredential.user);
        return;
      }

      toast.success('Login successful!');
      navigate('/dashboard'); // Redirect to home after successful login
    } catch (error) {
      console.error('Error signing in:', error);
      let errorMessage = 'Failed to sign in';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
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
    <div className="auth-container">
      <div className="auth-left">
        <img src={dataAuth} alt="Data Analytics" />
      </div>
      <div className="auth-right">
        <div className="auth-form-container">
          <p className="auth-switch">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <div className="auth-form-box">
            <h2>Welcome Back!</h2>
            <p className="auth-subtitle">Dive into back and keep learning.🤩</p>
            
            <button 
              className={`google-auth-btn ${loading ? 'disabled' : ''}`}
              onClick={handleGoogleSignIn}
              disabled={loading}
            >
              <img src={Google} alt="Google" />
              {loading ? 'Please wait...' : 'Sign in with Google'}
            </button>
            
            <div className="divider">
              <span>or</span>
            </div>

            <form onSubmit={handleEmailLogin} className="auth-form">
              <div className="form-group">
                <div className="input-with-icon">
                  <HiOutlineMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="auth-input"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="input-with-icon">
                  <HiOutlineLockClosed className="input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="auth-input"
                  />
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>
              
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <button 
                disabled={loading} 
                type="submit" 
                className="auth-button"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
