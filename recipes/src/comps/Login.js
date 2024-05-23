import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../context/Firebase'; // Adjust the path as needed
import './Login.css'; // Assuming you have a separate CSS file for styling

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fetch the user document by username (used as document ID)
      const userDocRef = doc(db, "users", username);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Validate password
        if (userData.password === password) {
          alert('Login successful!');
          navigate('/home-page'); // Redirect to homepage
        } else {
          alert('Invalid username or password');
        }
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in: ' + error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome To Potluck Recipes</h1> 
      <h3>Create and view recipes here</h3>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
          <button type="submit" className="login-button">Submit</button>
          <button type="button" className="login-button" onClick={() => navigate('/')}>Back</button>
      </form>
    </div>
  );
}

export default Login;
