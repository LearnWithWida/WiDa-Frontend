import { useAuth } from '../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = () => {
  const { user } = useAuth();
  
  return (
    <div className="user-avatar">
      {user?.photoURL ? (
        <img 
          src={user.photoURL} 
          alt={user.displayName || 'User'} 
          className="user-image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.querySelector('.fallback-icon').style.display = 'block';
          }}
        />
      ) : (
        <FaUserCircle className="fallback-icon" />
      )}
    </div>
  );
};

export default UserProfile; 