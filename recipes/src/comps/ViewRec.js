import React, { useState } from 'react';

const recipes = [
  { id: 1, type: 'Breakfast', name: 'Pancakes', description: 'Fluffy pancakes', instructions: 'Mix ingredients and cook on a griddle.' },
  { id: 2, type: 'Lunch', name: 'Caesar Salad', description: 'Classic Caesar salad', instructions: 'Toss lettuce with dressing and croutons.' },
  { id: 3, type: 'Dinner', name: 'Spaghetti', description: 'Spaghetti with marinara sauce', instructions: 'Cook pasta and add sauce.' },
  { id: 4, type: 'Dessert', name: 'Chocolate Cake', description: 'Rich chocolate cake', instructions: 'Bake the cake and frost with chocolate.' },
];

function ViewRec() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} onClick={() => handleRecipeClick(recipe)}>
            <strong>Type:</strong> {recipe.type} <strong>Name:</strong> {recipe.name}
          </li>
        ))}
      </ul>
      {selectedRecipe && (
        <div>
          <h2>{selectedRecipe.name}</h2>
          <p><strong>Type:</strong> {selectedRecipe.type}</p>
          <p><strong>Description:</strong> {selectedRecipe.description}</p>
          <p><strong>Instructions:</strong> {selectedRecipe.instructions}</p>
          <button onClick={() => setSelectedRecipe(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ViewRec;
