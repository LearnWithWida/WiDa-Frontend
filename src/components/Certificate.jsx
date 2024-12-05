import React from 'react';
import { useAuth } from '../context/AuthContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { FaDownload, FaTimes } from 'react-icons/fa';
import './Certificate.css';

const Certificate = ({ onClose, customName }) => {
  const { user } = useAuth();
  const certificateRef = React.useRef();
  
  const getUserDisplayName = () => {
    if (customName) {
      return customName;
    }
    if (user) {
      return user.displayName || user.email?.split('@')[0] || 'Student';
    }
    return 'Student';
  };

  const generatePDF = async () => {
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        logging: true,
        width: certificateRef.current.offsetWidth,
        height: certificateRef.current.offsetHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
        backgroundColor: '#ffffff',
      });

      const imgWidth = 297;
      const imgHeight = 210;
      const aspectRatio = canvas.height / canvas.width;

      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      const padding = 10;
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        padding,
        padding,
        pdfWidth - (padding * 2),
        (pdfWidth - (padding * 2)) * aspectRatio,
        '',
        'FAST'
      );

      const fileName = `WiDa_Certificate_${getUserDisplayName().replace(/\s+/g, '_')}.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('There was an error generating your certificate. Please try again.');
    }
  };

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="certificate-modal-overlay" onClick={onClose}>
      <div className="certificate-modal" onClick={e => e.stopPropagation()}>
        <div className="certificate-content" ref={certificateRef}>
          <div className="certificate-design">
            {/* Corner decorations */}
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <div className="corner corner-bl"></div>
            <div className="corner corner-br"></div>

            {/* Flourishes */}
            <div className="flourish flourish-top"></div>
            <div className="flourish flourish-bottom"></div>

            {/* Side decorations */}
            <div className="side-decoration side-decoration-left"></div>
            <div className="side-decoration side-decoration-right"></div>

            <div className="registration-number">RC NO: 3665105</div>
            
            <div className="certificate-header">
              <div className="logo-text">LearnWithWiDa</div>
              <div className="certificate-title">Certificate of Completion</div>
            </div>
            
            <div className="certificate-body">
              <div className="decoration-line"></div>
              <p className="presented-text">This is to certify that</p>
              <h2 className="recipient-name">{getUserDisplayName()}</h2>
              <p className="completion-text">has successfully completed the course</p>
              <h3 className="course-name">Data Analysis Masterclass</h3>
              <p className="course-description">
                A comprehensive program covering data analysis fundamentals, 
                statistical methods, and advanced visualization techniques
              </p>
            </div>

            <div className="certificate-footer">
              <div className="instructors-section">
                <div className="instructor">
                  <div className="signature">Yusuf Mustapha</div>
                  <div className="signature-line"></div>
                  <p className="signature-label">Lead Instructor</p>
                </div>

                <div className="instructor">
                  <div className="signature">Ibrahim Muiz</div>
                  <div className="signature-line"></div>
                  <p className="signature-label">Course Instructor</p>
                </div>
              </div>

              <div className="date-section">
                <p className="date">{currentDate}</p>
                <div className="date-line"></div>
                <p className="date-label">Date of Completion</p>
              </div>

              <div className="certificate-seal">
                <div className="seal-circle">
                  <span className="seal-text">LearnWithWida</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="certificate-buttons">
          <button className="download-btn" onClick={generatePDF}>
            <FaDownload className="btn-icon" /> Download
          </button>
          <button className="close-btn" onClick={onClose}>
            <FaTimes className="btn-icon" /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
