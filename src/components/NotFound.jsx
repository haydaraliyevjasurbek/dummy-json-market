import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="container not-found">
      <h1>404 - Page not found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to={"/"}>Home page</Link>
    </div>
  );
};

export default NotFound;
