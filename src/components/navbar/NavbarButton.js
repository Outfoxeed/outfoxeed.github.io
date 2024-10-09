import React from 'react'
import { useLocation } from 'react-router-dom'
import './NavbarButton.css'

export default function NavbarButton({
    children,
    onClick,
    href
  }) 
  {

    const checkHref = href ? href : '/';
    const location = useLocation();
    const selectedState = location.pathname.endsWith(checkHref) ? "selected" : "default";

    return (
        <>
            <a href={checkHref} className='navbar-button-container'>
                <button
                    className={`navbar-button navbar-button-${href}
                     navbar-button--${selectedState}`}
                    onClick={onClick}
                >
                    {children}
                </button>
            </a>
        </>
    )
}
