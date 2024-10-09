import React from 'react'
import './SocialsBar.css';

function SocialsBar() {
  return (
    <>
        <div className="socials-bar">
          <ul className='socials-icons-container'>
            <a className="social-icon-wrapper"
                href="https://www.linkedin.com/in/morigan-letourneau-2188881ba/"
                target='_blank'
                rel="noopener noreferrer">
                <i className='fab fa-linkedin' />
            </a>
            <a className='social-icon-wrapper'
              href="https://github.com/Outfoxeed"
              target='_blank'
              rel="noopener noreferrer">
              <i className='fab fa-github' />
            </a>
            <a className="social-icon-wrapper" href="mailto:morigan0letourneau@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
            <a className="social-icon-wrapper" 
              href="https://outfoxeed.itch.io/"
              target='_blank' 
              rel="noopener noreferrer" >
                <i className='fab fa-itch-io' />
            </a>
          </ul>
          <h5 className='mail'>morigan0letourneau@gmail.com</h5>
        </div>
    </>
  )
}

export default SocialsBar