import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, success, message }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className={`modal-header ${success ? 'success' : 'error'}`}>
          <h2>{success ? 'Success!' : 'Error'}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-body">
          <p>{message}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal; 