import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Feedback.css";

const Feedback = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("eGfeOXpr2avwHqpud"); // Replace with your actual public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Log form data for debugging
    const formData = new FormData(form.current);
    console.log('Form data:', Object.fromEntries(formData));

    emailjs
      .sendForm(
        'service_8nl7zes',  // Your service ID
        'template_nzkmcaw', // Your template ID
        form.current, 
        'eGfeOXpr2avwHqpud' // Your public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result);
          toast.success('Feedback submitted successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error);
          toast.error(`Failed to submit feedback: ${error.text}`);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="feedback-section">
      <ToastContainer />
      <div className="feedback-content">
        <h2>
          We'd love to hear your <span className="highlight">feedback</span> and{" "}
          <span className="highlight">suggestions</span>
        </h2>
        <p>
          We value your opinion as it is important to the improvement of this
          product. Help thousands of students by sharing your thoughts.
        </p>
      </div>
      <div className="feedback-form">
        <h3>Input your suggestion here</h3>
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            placeholder="Input your name" 
            name="from_name"  // Make sure this matches your template variable
            required 
          />
          <input 
            type="email" 
            placeholder="Enter email address" 
            name="reply_to"  // Make sure this matches your template variable
            required 
          />
          <textarea 
            placeholder="Type suggestion here" 
            name="message"   // Make sure this matches your template variable
            required
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit suggestion'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
