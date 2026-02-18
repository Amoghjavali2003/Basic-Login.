import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setMessage('Username and password are required');
      return;
    }
    try {
      const response = await axios.post('/api/login', { username, password });
      setMessage('Login successful! Welcome...');
      localStorage.setItem('token', response.data.token); // Store token
      setTimeout(() => navigate('/welcome'), 2000);
    } catch (error: any) {
      const errorMsg = error.response?.data?.error || 'Login failed';
      setMessage(errorMsg);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>Login</button>
      </form>
      <p>{message}</p>
      <p>Don't have an account? <a href="#" onClick={() => navigate('/register')}>Register here</a></p>
    </div>
  );
}

export default LoginPage;