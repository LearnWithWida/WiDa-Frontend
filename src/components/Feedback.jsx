import  { useState } from 'react';
import { toast } from 'react-toastify';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    try {
      // Get existing feedback from localStorage
      const existingFeedback = JSON.parse(localStorage.getItem('feedback') || '[]');
      
      // Add new feedback with timestamp
      const newFeedback = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      
      // Save to localStorage
      localStorage.setItem('feedback', JSON.stringify([...existingFeedback, newFeedback]));
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      toast.success('Thank you for your feedback!');
    } catch (error) {
      console.error('Error saving feedback:', error);
      toast.error('Failed to save feedback. Please try again.');
    }
  };

  return (
    <div className="feedback-container">
      <h2>Send us your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          required
        />
        <textarea
          placeholder="Your message"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          required
        />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
