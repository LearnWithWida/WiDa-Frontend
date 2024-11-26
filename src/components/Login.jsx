import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Google from "../assets/google.png"


const Login = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/'); // Redirect to home after successful login
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error('Failed to sign in with Google. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate checking if user exists
    // In a real app, this would be an API call to your backend
    const userExists = false; // This is just for demonstration

    if (!userExists) {
      toast.error(
        <div>
          Account not found! 
          <span 
            style={{cursor: 'pointer', textDecoration: 'underline'}} 
            onClick={() => navigate('/signup')}
          >
            Create an account here
          </span>
        </div>,
        {
          onClick: () => navigate('/signup'),
          closeOnClick: false
        }
      );
      return;
    }

    // Continue with login logic if user exists
  };

  return (
    <div className="login-container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="login-box">
        <h2>Welcome Back!</h2>
        <p>Dive into back and keep learning.🤩</p>
        
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
        <img src={Google} alt="Google" />
          Login with Google
        </button>
        
        <div className="divider">
          <span>or</span>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
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
          <div className="forgot-password">
            <span onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
          </div>
          <button type="submit" className="login-submit-btn">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <span onClick={() => navigate('/signup')}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
