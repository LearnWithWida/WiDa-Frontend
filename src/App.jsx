import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Course from './pages/Course';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CourseDetails from './pages/CourseDetails';
import Instructor from './pages/Instructor';
import About from './pages/About';
import CourseContent from './pages/CourseContent';

// Simplified Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
  const userPurchases = purchasedCourses[user.uid] || {};
  
  if (!userPurchases['data analysis']) {
    return <Navigate to="/course/DataAnalysis" replace />;
  }

  return children;
};

export const App = () => {

  return (
    <AuthProvider>
      <Router basename="/">
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/course/data-analysis" element={<CourseDetails />} />
              <Route path="/course/data-analysis/content" element={<CourseContent />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/instructors" element={<Instructor />} />
              <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/about" element={<About />} />
              <Route path="/course/:courseName" element={<CourseDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App