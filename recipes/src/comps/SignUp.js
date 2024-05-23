// src/comps/SignUp.js
import React, { useState } from 'react';
import { db } from '../context/Firebase';  // Adjust the path as needed
import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Assuming you have a separate CSS file for styling


function SignUp() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Store user information in Firestore
      await setDoc(doc(db, "users", username), {
        firstName,
        lastName,
        password,
        createdAt: serverTimestamp()
      });

      alert('User registered successfully!');
      navigate('/login'); // Redirect to login after signup

    } catch (error) {
      console.error('Error signing up:', error);
      alert('Error signing up: ' + error.message);
    }
  };


  return (
    <div className="login-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp} className="login-form">
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
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
        <div className="button-group">
          <button type="submit" className="login-button">Sign Up</button>
        </div>
      </form>
    </div>
  );
}



export default SignUp;
