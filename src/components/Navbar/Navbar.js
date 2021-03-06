import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };

  const turnOffHandler = () => {
    setIsClicked(false);
  };
  console.log(isClicked);

  return (
    <header>
      <nav className="navigation nav">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>
        <div className="horizontal"></div>
        <ul className={isClicked ? `navlinks active` : `navlinks`}>
          <NavLink onClick={turnOffHandler} className="link" to="/">
            <li>
              <span>00</span> Home
            </li>
          </NavLink>
          <NavLink
            onClick={turnOffHandler}
            className="link"
            activeClassName="current"
            to="/destination"
          >
            <li>
              <span>01</span> Destination
            </li>
          </NavLink>
          <NavLink
            onClick={turnOffHandler}
            className="link"
            activeClassName="current"
            to="/crew"
          >
            <li>
              <span>02</span> Crew
            </li>
          </NavLink>
          <NavLink
            onClick={turnOffHandler}
            className="link"
            activeClassName="current"
            to="/technology"
          >
            <li>
              <span>03</span> Technology
            </li>
          </NavLink>
        </ul>
      </nav>
      <div className={isClicked ? 'icon black' : 'icon'}>
        {isClicked ? (
          <FontAwesomeIcon icon={faTimes} onClick={clickHandler} />
        ) : (
          <FontAwesomeIcon icon={faBars} onClick={clickHandler} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
