import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Sign up logikasi
    console.log('Sign Up:', { email, password, confirmPassword });
  };

  return (
    <div className="container signup">
      <form className="signup__form" onSubmit={handleSubmit}>
      <h2 className="signup__title">Sign up</h2>
        <input
          type="email"
          className="signup__input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup__input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup__input"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup__button">Sign up</button>
        <Link to="/login" className="breadcrumb__link">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
