import React from 'react'
import Title from '../generics/title/Title'
import { Button } from '../generics/Button'
import './AboutMePage.css'

export default function AboutMePage() {
  const onCvDownloadButtonClicked = () => {
    window.open("/cv/cv.pdf", '_blank');
  };

  return (
    <>
      <div className="about-me-page">
        <Title>About Me</Title>

        <div className="about-me-container">
          <div className="about-me-info-container">
            <div className="about-me-info">
              <p>Studying Video Game Programming for 5 years at IIM (Institut de l'Internet et du Multimédia).</p>
              <p>Former vice-president of <a href="https://www.instagram.com/leoindiegames/" target="_blank">LéoIndieGames</a>, a student association about game development.</p>
              <p>Former Lead Programmer at <a href="https://x.com/streatlightteam/" target="_blank">Streetlight Studio</a>, where we released the demo of <a href="/project/kanpeki" target="_blank">Kanpeki on Steam</a>.</p>
            </div>
            <div className="about-me-cv-container">
              <div className="about-me-cv-download">
                <Button 
                  onClick={onCvDownloadButtonClicked} 
                  buttonSize="btn--large"
                >
                  Download CV
                </Button>
              </div>
              <div className="about-me-cv">
                <img src="/cv/eng.jpg" alt="CV Letourneau Morigan - ENG" />
                <img src="/cv/fr.jpg" alt="CV Letourneau Morigan - FR" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
