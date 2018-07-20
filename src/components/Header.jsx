import React from 'react';
import Link from 'gatsby-link';

import github from '../img/github-icon.svg';
import logo from '../img/logo.png';
import { OneRowGridContainer, GridElement, NavContainer, NavElement, NavLogo } from '../../StyledComponents';

const Header = () => (
  <OneRowGridContainer numberofColumns={1} numberofColumns={3}>
    <GridElement gridColumn={1} gridRow={1}>Test 123</GridElement>
    <GridElement gridColumn={3} gridRow={1}>Test 1333333323</GridElement>
  </OneRowGridContainer>
  // <NavContainer>
  //   <NavElement gridColumn={5}>Funf
      
  //   </NavElement>
  //   <NavElement gridColumn={2}>Zwei
      
  //   </NavElement>
  //   <NavLogo gridColumn={1}>Eins</NavLogo>
  // </NavContainer>




  // <nav className="navbar is-transparent">
  //   <div className="container">
  //     <div className="navbar-brand">
  //       <Link to="/" className="navbar-item">
  //         <figure className="image">
  //           <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
  //         </figure>
  //       </Link>
  //     </div>
  //     <div className="navbar-start">
  //       <Link className="navbar-item" to="/about">
  //         About
  //       </Link>
  //       <Link className="" to="/products">
  //         Products
  //       </Link>
  //     </div>
  //     <div className="navbar-end">
  //       <a
  //         className="navbar-item"
  //         href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <span className="icon">
  //           <img src={github} alt="Github" />
  //         </span>
  //       </a>
  //     </div>
  //   </div>
  // </nav>
);

export default Header;
