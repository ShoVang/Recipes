import React from 'react';

function Login() {
  return (
    <div>
      <h1>Create and view recipes here</h1>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>         <button type="submit">Sign up</button>

      </form>
    </div>
  );
}

export default Login;

