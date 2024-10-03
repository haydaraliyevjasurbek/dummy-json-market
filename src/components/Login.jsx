import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Email va password kiritilganini faqat frontendda tekshirish uchun ishlatish mumkin.
    console.log('Email:', email);
    console.log('Password:', password);

    // Auth0 bilan login jarayonini boshlash
    loginWithRedirect();
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
        <button type="submit" className="login__button">Login with Auth0</button>
        <Link to="/sign-up" className="breadcrumb__link">Sign up</Link>
      </form>
    </div>
  );
};

export default Login;
