import React from 'react';
import { Link, useLocation } from 'react-router-dom';
const Breadcrumb = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment);
  return (
    <nav className="breadcrumb">
      <ul className="breadcrumb__list">
        {location.pathname !== '/' && (
          <li className="breadcrumb__item">
            <Link to="/" className="breadcrumb__link">Home</Link>
          </li>
        )}
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          
          return (
            <li key={index} className="breadcrumb__item">
              {segment === 'products' ? (
                <Link to="/category" className="breadcrumb__link">{segment}</Link>
              ) : (
                <Link to={path} className="breadcrumb__link">{segment}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
