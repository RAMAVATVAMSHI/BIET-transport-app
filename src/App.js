import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import QRScreen from './components/QRScreen';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp setUser={setUser} />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/qr" element={<QRScreen user={user} />} />
      </Routes>
    </Router>
  );
}

export default App;