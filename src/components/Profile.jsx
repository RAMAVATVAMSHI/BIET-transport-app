import React from 'react';
import './profile.css';

function Profile() {
  const user = {
    name: 'Ramavath Vamshi',
    ticketNo: '21ET140892',
    email: 'vamshi@example.com',
    role: 'Student',
  };

  return (
    <div className="profile-container">
      <img
        src="https://via.placeholder.com/100x100.png?text=Avatar"
        alt="Avatar"
        className="avatar"
      />
      <h2>Welcome, {user.name}!</h2>
      <p><strong>Main Ticket No:</strong> {user.ticketNo}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <div className="profile-menu">
        <button>Edit Profile</button>
        <button>Address</button>
        <button>Account Settings</button>
        <button>Contact Us</button>
        <button>About Us</button>
        <button>Log Out</button>
      </div>

      <div className="bottom-nav">
        <span>🏠</span>
        <span>👤</span>
        <span>📋</span>
        <span>⚙️</span>
      </div>
    </div>
  );
}

export default Profile;