import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    loginWithRedirect({
      screen_hint: 'signup',
      email, 
      password 
    });
  };

  return (
    <div className="container signup">
      <form className="signup__form" onSubmit={handleSignUp}>
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
        <Link to="/login" className="signup__button-login">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
