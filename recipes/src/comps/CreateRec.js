import React from 'react';

function CreateRec() {
  return (
    <div>
      <h1>Create recipes here</h1>
      <form>
        <div>
          <label htmlFor="type">Type:</label>
          <select id="type" name="type" required>
            <option value="">Select Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
          <div>
          <label htmlFor="name">Name:</label>
          <input type="name" id="name" name="name" required />
        </div>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" required />
        </div>
        <div>
          <label htmlFor="cost">Cost:</label>
          <input type="cost" id="cost" name="cost" required />
        </div>
        <div>
          <label htmlFor="requirements">Requirements:</label>
          <input type="requirements" id="requirements" name="requirements" required />
        </div>
        <div>
          <label htmlFor="instructions">Instructions :</label>
          <input type="instructions" id="instructions" name="instructions" required />
        </div>
        {/* maybe include a picutre / option to uploda a pic ?  */}
      </form>
    </div>
  );
}

export default CreateRec;
