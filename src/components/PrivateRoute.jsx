import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  
  // Check if user is logged in and has purchased the course
  const hasPurchased = () => {
    if (!user) return false;
    const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
    const userPurchases = purchasedCourses[user.uid] || {};
    return !!userPurchases['data analysis'];
  };

  return user && hasPurchased() ? children : <Navigate to="/course/DataAnalysis" />;
};

export default PrivateRoute;