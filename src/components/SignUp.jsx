import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Google from "../assets/google.png"
import './SignUp.css';

const SignUp = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      navigate('/'); // Redirect to home after successful sign-in
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>Master data analysis with expert-led courses.</p>
        
        <button className="google-signin-btn" onClick={handleGoogleSignIn}>
          <img src={Google} alt="Google" />
          Sign up with Google
        </button>
        
        <div className="divider">
          <span>or</span>
        </div>

        <form className="signup-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="signup-submit-btn">Create Account</button>
        </form>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
