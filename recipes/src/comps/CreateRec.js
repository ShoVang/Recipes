import React, { useState } from 'react';
import { db } from '../context/Firebase';  // Adjust the path as needed
import { setDoc, collection, doc, serverTimestamp } from "firebase/firestore";

function CreateRec() {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');
  const [requirements, setRequirements] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleCreateRecipe = async (e) => {
    e.preventDefault();
    try {
      // Generate a unique ID for the new recipe document
      const recipeRef = doc(collection(db, "recipes")); // Generates a new document reference with a unique ID

      // Store recipe information in Firestore
      await setDoc(recipeRef, {
        name,
        type,
        description,
        cost,
        requirements,
        instructions,
        createdAt: serverTimestamp()
      });

      alert('Recipe created successfully!');
      // Clear form fields
      setName('');
      setType('');
      setDescription('');
      setCost('');
      setRequirements('');
      setInstructions('');
    } catch (error) {
      console.error('Error creating recipe:', error);
      alert('Error creating recipe: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Create recipes here</h1>
      <form onSubmit={handleCreateRecipe}>
        <div>
          <label htmlFor="name">Dish Name:</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select 
            id="type" 
            name="type" 
            value={type} 
            onChange={(e) => setType(e.target.value)} 
            required
          >
            <option value="">Select Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input 
            type="text" 
            id="description" 
            name="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input 
            type="text" 
            id="cost" 
            name="cost" 
            value={cost} 
            onChange={(e) => setCost(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="requirements">Requirements:</label>
          <input 
            type="text" 
            id="requirements" 
            name="requirements" 
            value={requirements} 
            onChange={(e) => setRequirements(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="instructions">Instructions:</label>
          <input 
            type="text" 
            id="instructions" 
            name="instructions" 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
}

export default CreateRec;
