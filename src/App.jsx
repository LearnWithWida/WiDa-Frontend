import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExamCourse from './pages/ExamCourse';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import CourseDetails from './pages/CourseDetails';
import Instructor from './pages/Instructor';
import About from './pages/About';
import CourseContent from './pages/CourseContent';
import TestPage from './pages/TestPage';
import Database from './pages/Database';
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Scholarship from "./pages/Scholarship";
import Blog from "./pages/Blog";

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
          <Routes>
            {/* Auth routes without Nav and Footer */}
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />

            {/* Routes with Nav and Footer */}
            <Route
              path="/*"
              element={
                <>
                  <Navbar />
                  <main className="main-content">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/course/data-analysis" element={<CourseDetails />} />
                      <Route path="/course/data-analysis/content" element={<CourseContent />} />
                      <Route path="/ExamCourse" element={<ExamCourse />} />
                      <Route path="/instructors" element={<Instructor />} />
                      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                      <Route path="/about" element={<About />} />
                      <Route path="/Database" element={<Database />} />
                      <Route path="/course/:courseName" element={<CourseDetails />} />
                      <Route path="/test/:courseId/:examId" element={<TestPage />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route path="/scholarship" element={<Scholarship />} />
                      <Route path="/blog" element={<Blog />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App