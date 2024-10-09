import React, { useState, useEffect } from 'react';
import { Button } from '../generics/Button';
import { useLocation } from 'react-router-dom';
import NavbarButton from './NavbarButton';
import './Navbar.css';

function Navbar() {
  const [navMobileMenuEnabled, setNavMovileMenuEnabled] = useState(false);
  const [navButtonsEnabled, setNavButtonsEnabled] = useState(true);

  const toggleNavMobileMenu = () => setNavMovileMenuEnabled(!navMobileMenuEnabled);
  const closeMobileMenu = () => setNavMovileMenuEnabled(false);

  const updateButtonsVisibility = () => {
    if (window.innerWidth <= 960) {
      setNavButtonsEnabled(false);
    } else {
      setNavButtonsEnabled(true);
    }
  };

  useEffect(() => {
    updateButtonsVisibility();
  }, []);

  window.addEventListener('resize', updateButtonsVisibility);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='menu-icon' onClick={toggleNavMobileMenu}>
            <i className={navMobileMenuEnabled ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={navMobileMenuEnabled ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <NavbarButton href='/'
                onClick={closeMobileMenu}
              >
                Home
              </NavbarButton>
            </li>
            <li className='nav-item'>
              <NavbarButton 
                href='/projects-library'
                onClick={closeMobileMenu}
              >
                Projects
              </NavbarButton>
            </li>
            <li className='nav-item'>
              <NavbarButton 
                href='/association'
                onClick={closeMobileMenu}
              >
                Association
              </NavbarButton>
            </li>
            <li className='nav-item'>
              <NavbarButton 
                href='/about-me'
                onClick={closeMobileMenu}
              >
                About Me
              </NavbarButton>
            </li>

            <li>
              <a
                href='/contact-me'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
          {navButtonsEnabled && 
            <Button buttonStyle='btn--outline' href={'/contact-me'}>
              Contact Me
            </Button>
          }
        </div>
      </nav>
    </>
  );
}

export default Navbar;
