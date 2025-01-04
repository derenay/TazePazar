import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h1>Dashboard</h1>
      <p>Hoş geldiniz!</p>
      <button 
        className="btn btn-danger" 
        onClick={handleLogout}
      >
        Çıkış Yap
      </button>
    </div>
  );
};

export default Dashboard;
