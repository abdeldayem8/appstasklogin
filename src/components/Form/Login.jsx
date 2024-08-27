import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../../redux/authslice';
import './style.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await fetch('https://backend.profferdeals.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        
        dispatch(setToken(data.token));
        alert('Welcome:  ' + data.data.name)
        
      } else {
        alert('Login Failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error during login');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
