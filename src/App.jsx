import { Router, Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthRoute } from './components/AuthRoute';
import Home from './pages/Home';
import ExamCourse from './pages/ExamCourse';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './pages/Dashboard';
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
import Collaborate from "./pages/Collaborate";
import BlogPost from "./pages/BlogPost";
import PhysicalProgram from './pages/PhysicalProgram';
import VirtualProgram from './pages/VirtualProgram';
import MentorshipProgram from './pages/MentorshipProgram';
import OneOnOneProgram from './pages/OneOnOneProgram';
import DataAnalysisCourse from './pages/DataAnalysisCourse';
import CyberSecurityCourse from './pages/CyberSecurityCourse';
import VirtualAssistantCourse from './pages/VirtualAssistantCourse';
import FaqPage from './pages/FaqPage';
import Lessons from './pages/Lessons';
import ProtectedRoute from './components/ProtectedRoute';
import ScrollToTop from './components/ScrollToTop';
import { NotificationProvider } from './context/NotificationContext';

const App = () => {
  return (
    <NotificationProvider>
      <AuthProvider>
        <div className="app-container">
            <ScrollToTop />
            <Routes>
              {/* Auth routes without Nav and Footer */}
              <Route path="/signup" element={
                <AuthRoute>
                  <SignUp />
                </AuthRoute>
              } />
              <Route path="/login" element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              } />
              <Route path="/forgot-password" element={
                <AuthRoute>
                  <ForgotPassword />
                </AuthRoute>
              } />

              {/* Routes with Nav and Footer */}
              <Route
                path="/*"
                element={
                  <>
                    <Navbar />
                    <main className="main-content">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={
                          <ProtectedRoute>
                            <Dashboard />
                          </ProtectedRoute>
                        } />
                        <Route path="/course/data-analysis" element={<CourseDetails />} />
                        <Route path="/course/data-analysis/content" element={
                          <ProtectedRoute>
                            <CourseContent />
                          </ProtectedRoute>
                        } />
                        {/* Other public routes */}
                        <Route path="/ExamCourse" element={<ExamCourse />} />
                        <Route path="/instructors" element={<Instructor />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/Database" element={<Database />} />
                        <Route path="/course/:courseName" element={<CourseDetails />} />
                        <Route path="/test/:courseId/:examId" element={<TestPage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        <Route path="/scholarship" element={<Scholarship />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/collaborate" element={<Collaborate />} />
                        <Route path="/blog/:id" element={<BlogPost />} />
                        <Route path="/physical-program" element={<PhysicalProgram />} />
                        <Route path="/programs/virtual" element={<VirtualProgram />} />
                        <Route path="/programs/mentorship" element={<MentorshipProgram />} />
                        <Route path="/programs/one-on-one" element={<OneOnOneProgram />} />
                        <Route path="/data-analysis" element={<DataAnalysisCourse />} />
                        <Route path="/cyber-security" element={<CyberSecurityCourse />} />
                        <Route path="/virtual-assistant" element={<VirtualAssistantCourse />} />
                        <Route path="/faqs" element={<FaqPage />} />
                        <Route 
                          path="/course/:courseName/lessons" 
                          element={
                            <ProtectedRoute>
                              <Lessons />
                            </ProtectedRoute>
                          } 
                        />
                      </Routes>
                    </main>
                    <Footer />
                  </>
                }
              />
            </Routes>
        </div>
      </AuthProvider>
    </NotificationProvider>
  );
};

export default App;
