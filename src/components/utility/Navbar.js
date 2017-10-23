import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.logout();
    history.push('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="navbar-brand">
        <Link to="/" className="nav-item">expressLists</Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/lists" className="nav-link">lists</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/lists/my-first-list" className="nav-link">make a list</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/lists/new" className="nav-link">new list</Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/lists/:id" className="nav-link">my list</Link>
        </li> */}
        <li className="nav-item">
          <Link to="/login" className="nav-link">login</Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">register</Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={logout}>logout</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
