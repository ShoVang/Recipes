import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome To Potluck Recipes</h1>
      <div>
        <Link to="/login">
          <button>Sign In</button>
        </Link>
        <Link to="/signup">
          <button>Sign Up</button>
        </Link>
        <Link to="/view-recipes">
          <button>View Recipes</button>
        </Link>
        <Link to="/create-recipe">
          <button>Create Recipe</button>
        </Link>
        <Link to="/view-users">
          <button>View Users</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
