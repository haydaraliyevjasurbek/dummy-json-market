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

    // Email va parolni oldindan tekshirish
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Auth0 ro'yxatdan o'tish jarayonini boshlash
    loginWithRedirect({
      screen_hint: 'signup',
      email, // Email maydoni
      password // Agar siz Auth0 dan o'z autentifikatsiyangizni boshqarayotgan bo'lsangiz
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
        <button type="submit" className="signup__button">Sign up with Auth0</button>
        <Link to="/login" className="breadcrumb__link">Login</Link>
      </form>
    </div>
  );
};

export default SignUp;
