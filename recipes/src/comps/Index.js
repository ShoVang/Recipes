import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css'; // Assuming you have a separate CSS file for styling
import beefLarb from '../pics/Beef_larb-19.jpg'; // Adjust the path as needed
import pho from '../pics/pho.avif'; // Adjust the path as needed
import fish2 from '../pics/fish2.jpeg'; // Adjust the path as needed

function Index() {
  return (
    <div className="index-container">
      <div className="cover-banner">
        <img
          src={beefLarb}
          alt="Cover 1"
          className="cover-picture"
        />
        <img
          src={pho}
          alt="Cover 2"
          className="cover-picture"
        />
        <img
          src={fish2}
          alt="Cover 3"
          className="cover-picture"
        />
      </div>
      <h1>Welcome To Potluck Recipes</h1>
      <div className="bio">
        <p>
          Welcome to Potluck Recipes, your go-to platform for sharing and discovering amazing recipes! Whether you're planning a family gathering, a friendly potluck, or just looking to try something new, we have the perfect recipes for you. Join our community today and start your culinary adventure!
        </p>
      </div>
      <div className="buttons">
        <Link to="/login">
          <button className="button">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="button">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
