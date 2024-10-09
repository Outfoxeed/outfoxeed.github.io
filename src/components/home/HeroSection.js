import React from 'react';
import SocialsBar from '../generics/SocialsBar';
import { Button } from '../generics/Button';

import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Morigan Letourneau</h1>
      <h2>Gameplay Programmer</h2>
      <div className='hero-btns'>
        <ul>
          <Button
            className='btns'
            buttonSize='btn--large'
            href="/projects-library"
          >
            Projects
          </Button>
        </ul>
        <ul>
          <Button
            className='btns'
            buttonSize='btn--large'
            href="/association"
          >
            Association
          </Button>
          <Button
            className='btns'
            buttonSize='btn--large'
            href="/about-me"
          >
            About Me
          </Button>
        </ul>
      </div>
      <SocialsBar />
    </div>
  );
}

export default HeroSection;
