import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { HiOutlineMail } from 'react-icons/hi';
import dataAuth from '../assets/data-auth.png';
import 'react-toastify/dist/ReactToastify.css';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent! Check your inbox.');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (error) {
      console.error('Error sending reset email:', error);
      let errorMessage = 'Failed to send reset email';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'No account found with this email';
          break;
        case 'auth/invalid-email':
          errorMessage = 'Invalid email address';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Too many attempts. Please try again later';
          break;
        default:
          errorMessage = error.message;
      }
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    document.title = 'Forgot Password | Wida';
  }, []);
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={dataAuth} alt="Data Analytics" />
      </div>
      <div className="auth-right">
        <div className="auth-form-container">
          <p className="auth-switch">
            Remember your password? <Link to="/login">Sign in</Link>
          </p>
          <div className="auth-form-box">
            <h2>Reset Password</h2>
            <p className="auth-subtitle">Enter your email to receive a password reset link</p>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <div className="input-with-icon">
                  <HiOutlineMail className="input-icon" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="auth-input"
                  />
                </div>
              </div>

              <button 
                disabled={loading} 
                type="submit" 
                className="auth-button"
              >
                {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword; 