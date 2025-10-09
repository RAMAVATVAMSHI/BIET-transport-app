import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react'; // ✅ Correct import
import html2canvas from 'html2canvas';
import './qr.css';

function QRScreen({ user }) {
  const qrRef = useRef();

  const handleDownload = () => {
    html2canvas(qrRef.current).then((canvas) => {
      const link = document.createElement('a');
      link.download = `${user.name}-QR.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };

  return (
    <div className="qr-container" ref={qrRef}>
      <h2>BIET BUS TRANSPORT</h2>
      <p><strong>Route No:</strong> 22</p>
      <p><strong>Hall Ticket No:</strong> {user.ticketNo}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Department:</strong> Computer Science</p>
      <p><strong>Status:</strong> <span className="paid">PAID</span></p>
      <p><strong>Boarding Point:</strong> BN REDDY NAGAR &gt; BIET CAMPUS</p>
      <QRCodeCanvas value={user.ticketNo} size={180} />
      <button onClick={handleDownload}>Download QR</button>
    </div>
  );
}

export default QRScreen;