import React, { useState, useEffect } from 'react';
import { db } from '../context/Firebase'; // Adjust the path as needed
import { collection, getDocs } from "firebase/firestore"; 

function ViewRec() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'recipes'));
        const fetchedRecipes = [];
        querySnapshot.forEach((doc) => {
          fetchedRecipes.push({ id: doc.id, ...doc.data() });
        });
        setRecipes(fetchedRecipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            <strong>Type:</strong> {recipe.type} <strong>Name:</strong> {recipe.name} <strong>Cost:</strong> {recipe.cost}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p><strong>Type:</strong> {selectedRecipe.type}</p>
          <p><strong>Description:</strong> {selectedRecipe.description}</p>
          <p><strong>Cost:</strong> {selectedRecipe.cost}</p>
          <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
          <button onClick={() => setSelectedRecipe(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ViewRec;
