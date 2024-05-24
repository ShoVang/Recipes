import React, { useState, useEffect } from 'react';
import { db } from '../context/Firebase'; // Adjust the path as needed
import { collection, getDocs } from 'firebase/firestore';
import './ViewRec.css'; // Assuming you have a separate CSS file for styling

function ViewRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        if (!querySnapshot.empty) {
          const recipesData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setRecipes(recipesData);
        } else {
          console.log('No matching documents.');
        }
      } catch (error) {
        console.error('Error fetching recipes: ', error.message);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div className="view-recipes-container">
      <h1>View Recipes</h1>
      <ul className="recipes-list">
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)} className="recipe-item">
            <strong>Type:</strong> {recipe.type} <strong>Name:</strong> {recipe.name} <strong>Cost:</strong> {recipe.cost}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div className="recipe-details">
          <h2>{selectedRecipe.name}</h2>
          <p><strong>Type:</strong> {selectedRecipe.type}</p>
          <p><strong>Description:</strong> {selectedRecipe.description}</p>
          <p><strong>Cost:</strong> {selectedRecipe.cost}</p>
          <p><strong>Requirements:</strong> {selectedRecipe.requirements}</p>
          <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
          <button onClick={() => setSelectedRecipe(null)} className="login-button">Close</button>
        </div>
      )}
    </div>
  );
}

export default ViewRecipes;
