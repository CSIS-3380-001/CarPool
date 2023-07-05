import React, { useState } from 'react';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic with email and password
    // Example: call an API to validate the credentials

    // On successful login, update the authentication state
    // Example: call a login function from the authentication context
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
