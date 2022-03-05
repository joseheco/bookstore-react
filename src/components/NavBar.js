import React from 'react';
import { Link } from 'react-router-dom';
import Profile from '../img/profile.svg';

const NavBar = () => (
  <div>
    <nav className="display">
      <ul>
        <li className="title-app">
          Bookstore CMS
        </li>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="categories">CATEGORIES</Link>
        </li>
      </ul>
      <img className="profile" alt="Profile" src={Profile} />
    </nav>
  </div>
);

export default NavBar;
