import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logikasi
    console.log('Login:', { email, password });
  };

  return (
    <div className="login">
      <h2 className="login__title">Login</h2>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="login__input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="login__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login__button">Send</button>
        <Link to="/sign-up" className="breadcrumb__link">Sign up</Link>
      </form>
    </div>
  );
};

export default Login;
