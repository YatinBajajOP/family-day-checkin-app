import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Barcode from 'react-barcode';
import dummyData from '../dummyData';
import html2canvas from 'html2canvas';
import '../styles/BarcodeComponent.css';

const BarcodeComponent = () => {
  const navigate = useNavigate();
  const barcodeRef = useRef();

  const handleDownloadBarcode = () => {
    html2canvas(barcodeRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png'); // Convert canvas to data URL
      link.download = 'barcode.png'; // Set the file name
      link.click(); // Trigger download
    });
  };

  const handleUpdateDetails = () => {
    navigate('/form');
  };

  return (
    <div className="barcode-container">
      <h2>Use this barcode at the time of entry</h2>
      <div ref={barcodeRef} style={{ margin: '20px auto' }}>
        <Barcode value={dummyData.unique_code} />
      </div>
      <button className="download-btn" onClick={handleDownloadBarcode}>
        Download Barcode
      </button>
      <button className="update-btn" onClick={handleUpdateDetails}>
        Update Details
      </button>
      <button className="home-btn" onClick={() => navigate('/')}>
        Home
      </button>
    </div>
  );
};

export default BarcodeComponent;
