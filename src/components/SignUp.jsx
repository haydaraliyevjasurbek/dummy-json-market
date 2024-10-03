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
    <div className="signup">
      <form className="signup__form" onSubmit={handleSubmit}>
      <h2 className="signup__title">Ro'yxatdan o'tish</h2>
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
          placeholder="Parol"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          className="signup__input"
          placeholder="Parolni tasdiqlang"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit" className="signup__button">Ro'yxatdan o'tish</button>
        <Link to="/login" className="breadcrumb__link">Kirish</Link>
      </form>
    </div>
  );
};

export default SignUp;
