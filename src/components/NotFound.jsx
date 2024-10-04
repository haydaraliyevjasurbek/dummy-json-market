import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="container not-found">
      <h1 className="not-found__title">404 - Page not found</h1>
      <p className="not-found__message">Sorry, the page you are looking for does not exist.</p>
      <Link className="not-found__link" to={"/"}>Home page</Link>
    </div>
  );
};

export default NotFound;
