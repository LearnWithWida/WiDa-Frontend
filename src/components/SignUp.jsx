import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import dataAuth from '../assets/data-auth.png';
import Google from "../assets/google.png";
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import "../components/SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }
    try {
      setError('');
      setLoading(true);
      await signup(email, password, fullName);
      navigate('/');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }
  useEffect(() => {
    document.title = 'Sign Up | Wida';
  }, []);
  return (
    <div className="auth-container">
      <div className="auth-left">
        <img src={dataAuth} alt="Data Analytics" />
      </div>
      <div className="auth-right">
        <div className="auth-form-container">
          <p className="auth-switch">
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
          <div className="auth-form-box">
            <h2>Create your account</h2>
            <p className="auth-subtitle">Master data analysis with expert-led courses.</p>
            
            <button className="google-auth-btn">
              <img src={Google} alt="Google" />
              Sign up with Google
            </button>
            
            <div className="divider">
              <span>or</span>
            </div>

            {error && <div className="error-message">{error}</div>}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-group">
                <div className="input-with-icon">
                  <HiOutlineUser className="input-icon" />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="auth-input spacing"
                  />
                </div>
              </div>
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
              <div className="form-group">
                <div className="input-with-icon">
                  <HiOutlineLockClosed className="input-icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="auth-input"
                  />
                  <button 
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>
              
              <button 
                disabled={loading || !agreeToTerms} 
                type="submit" 
                className="auth-button"
              >
                Sign Up
              </button>
              
              <div className="terms-checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreeToTerms}
                  onChange={(e) => setAgreeToTerms(e.target.checked)}
                />
                <label htmlFor="terms">
                  I agree to the <Link to="/terms" className="terms-link">Terms and Conditions</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
