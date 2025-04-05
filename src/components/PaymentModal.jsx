import { PaystackButton } from 'react-paystack';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './PaymentModal.css';
import { FaLock } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useNotifications } from '../context/NotificationContext';

const PaymentModal = ({ amount, courseName, onClose }) => {
  const { user, handlePurchase } = useAuth();
  const navigate = useNavigate();
  const { addNotification } = useNotifications();
  const [userCurrency, setUserCurrency] = useState({
    code: 'NGN',
    symbol: '₦',
    amount: amount
  });

  useEffect(() => {
    // Detect user's location and set currency
    const detectUserCurrency = async () => {
      try {
        // Get user's country from IP
        const locationResponse = await fetch('https://ipapi.co/json/');
        const locationData = await locationResponse.json();
        
        // Get exchange rates
        const ratesResponse = await fetch('https://api.exchangerate-api.com/v4/latest/NGN');
        const ratesData = await ratesResponse.json();

        // Currency mapping
        const currencyMap = {
          US: { code: 'USD', symbol: '$' },
          GB: { code: 'GBP', symbol: '£' },
          EU: { code: 'EUR', symbol: '€' },
          NG: { code: 'NGN', symbol: '₦' },
          // Add more countries/currencies as needed
        };

        const userCountry = locationData.country_code;
        const currency = currencyMap[userCountry] || currencyMap.NG; // Default to NGN
        const rate = ratesData.rates[currency.code] || 1;
        const convertedAmount = (amount * rate).toFixed(2);

        setUserCurrency({
          code: currency.code,
          symbol: currency.symbol,
          amount: convertedAmount
        });

      } catch (error) {
        console.error('Error detecting currency:', error);
        // Fallback to NGN if detection fails
        setUserCurrency({
          code: 'NGN',
          symbol: '₦',
          amount: amount
        });
      }
    };

    detectUserCurrency();
  }, [amount]);

  // Ensure amount is in kobo for Paystack
  const amountInKobo = parseInt(amount) * 100;

  const validCourseNames = {
    'virtual-assistant': 'Virtual Assistant Course',
    'cyber-security': 'Cyber Security Course',
    'data-analysis': 'Data Analysis Course'
  };

  const handlePaystackSuccess = async (reference) => {
    try {
      const purchasedCourses = JSON.parse(localStorage.getItem('purchasedCourses')) || {};
      if (!purchasedCourses[user.uid]) {
        purchasedCourses[user.uid] = {};
      }
      
      // Use the course name as stored in validCourseNames
      const courseKey = Object.keys(validCourseNames).find(key => 
        validCourseNames[key].toLowerCase() === courseName.toLowerCase()
      ) || courseName;

      purchasedCourses[user.uid][courseKey] = {
        purchaseDate: new Date().toISOString(),
        reference: reference.reference
      };
      
      localStorage.setItem('purchasedCourses', JSON.stringify(purchasedCourses));
      addNotification(`✨ Enrolled in ${courseName.split(' ')[0]} course!`);
      toast.success('Payment successful! You can now access the course.');
      onClose();
      navigate(`/course/${courseKey}/lessons`);
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error('Error processing payment. Please try again.');
    }
  };

  const config = {
    reference: `REF-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
    email: user?.email || '',
    amount: amountInKobo,
    publicKey: 'pk_test_1f7f9f0abf9a2c1ac3146188bfff27ed81b78ed7',
    currency: 'NGN',
    channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money', 'bank_transfer'],
    label: `Course Registration - ${validCourseNames[courseName] || courseName}`,
    text: "Pay Now",
    onSuccess: (reference) => handlePaystackSuccess(reference),
    onClose: () => {
      toast.info('Payment cancelled');
      onClose();
    }
  };

  const onPurchase = async () => {
    try {
      await handlePurchase(courseName, addNotification);
      // ... rest of purchase logic
    } catch (error) {
      // ... error handling
    }
  };

  return (
    <div className="payment-modal">
      <div className="payment-content">
        <h2>Register for {validCourseNames[courseName] || courseName}</h2>
        
        <div className="price-tag">
          <div className="amount">
            {userCurrency.symbol}{Number(userCurrency.amount).toLocaleString()}
          </div>
          <div className="description">
            One-time payment for lifetime access
            {userCurrency.code !== 'NGN' && (
              <div className="original-price">
                (₦{amount.toLocaleString()} NGN)
              </div>
            )}
          </div>
        </div>
        
        {user ? (
          <div className="payment-buttons">
            <PaystackButton
              {...config}
              className="paystack-button"
              text="Pay Now"
              onSuccess={handlePaystackSuccess}
              onClose={() => {
                toast.info('Payment cancelled');
                onClose();
              }}
            />
            <button onClick={onClose} className="close-button">
              Cancel
            </button>
            <div className="secure-payment">
              <FaLock /> Secure payment powered by Paystack
            </div>
          </div>
        ) : (
          <div>
            <p>Please login to continue</p>
            <button 
              onClick={() => navigate('/login')} 
              className="login-redirect-btn"
            >
              Login to Continue
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentModal; 