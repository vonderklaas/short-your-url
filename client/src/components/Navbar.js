import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.logout();
    navigate('/', { replace: true });
  };

  return (
    <nav>
      <div className='nav-wrapper blue darken-1' style={{ padding: '0 2rem' }}>
        <span className='brand-logo'>miniUrl</span>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/create'>Create</Link>
          </li>
          <li>
            <Link to='/links'>My links</Link>
          </li>
          <li>
            <a href='/' onClick={logoutHandler}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
