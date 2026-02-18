import React from 'react';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}>
        Welcome!
      </h1>
      <p style={{
        fontSize: '1.2rem',
        marginBottom: '40px',
        textAlign: 'center'
      }}>
        Congratulations! You have successfully logged in.
      </p>
      <button
        onClick={handleLogout}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff5252'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ff6b6b'}
      >
        Logout
      </button>
    </div>
  );
}

export default WelcomePage;