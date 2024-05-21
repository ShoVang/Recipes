import React from 'react';

function SignUp() {
  return (
<div>
      <h1>Sign up </h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="firstName" id="firstName" name="firstName" required />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="lastName" id="lastName" name="lastName" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Back</button>         <button type="submit">Sign up</button>

      </form>
    </div>
  );
};
export default SignUp;