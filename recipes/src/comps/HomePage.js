import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Assuming you have a separate CSS file for styling

function HomePage() {
  return (
    <div className="index-container">
      <h1>Welcome To Potluck Recipes</h1>

      <div className="bio">
        <p>
        Explore a world of delicious recipes, share your culinary creations, 
        and connect with fellow food enthusiasts on Potluck Recipes. 
        Whether you're a seasoned chef or just starting your cooking journey, there's something here for everyone!
        </p>
      </div>
      <div className="buttons">
        <Link to="/view-recipes">
          <button className="button">View Recipes</button>
        </Link>
        <Link to="/create-recipe">
          <button className="button">Create Recipe</button>
        </Link>
        {/* <Link to="/view-users">
          <button className="button">View Users</button>
        </Link> */}
      </div>
    </div>
  );
}

export default HomePage;
