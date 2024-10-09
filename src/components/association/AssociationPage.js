import React from 'react'
import './AssociationPage.css'
import Title from '../generics/title/Title'

export default function AssociationPage() {
  return (
    <>
      <div className="association-page">
        <Title>Association</Title>

        <ul className="content-container">
          <li className="content-row">
            <div className="content-text-container">
              <p>I have been for two years the vice president of <a href="https://linktr.ee/leoindiegames" target="_blank">Léo Indie Games</a>, a student association about the video game industry and game development in the Léonard de Vinci University pole.</p>
              <p>Its role was to promote and teach curious people how to make games whatever is the field of their current studies</p>
            </div>
            <div className="content-image-container"><img src="/images/association/lig_logo.png" alt="Logo of the association" /></div>
          </li>
          <li className="content-row">
            <div className="content-image-container"><img src="/images/association/lig_classes.jpg" alt="Picture of me during one of these live classes" /></div>
            <div className="content-text-container">
              <p>During the year, we organize and make live classes on Unity for beginners</p>
              <p>We are also available all year for our members to give advices and help around game development</p>
            </div>
          </li>
          <li className="content-row">
            <div className="content-text-container">
              <p>The association participates in the creation competition of the Video Game festival of the Hauts-de-Seine department</p>
              <p>
                2021: two teams of the association won a prize including my team with a game named <a href="https://growparishmeridian.itch.io/beat-polarity" target="_blank">'Beat Polarity'</a>
                <br/>
                2023: one team won the first prize for the "Best Game" category with <a href="https://koryme-nakxay.itch.io/a-contre-courant" target="_blank">'À contre-courant'</a>
              </p>
            </div>
            <div className="content-image-container"><img src="/images/association/lig_festival-92.jpg" alt="Picture of members of the association receiving the prize for the year 2021" /></div>
          </li>
          <li className="content-row">
            <div className="content-image-container"><img src="/images/association/lig_tournament.jpg" alt="Picture " /></div>
            <div className="content-text-container">
              <p>Every year, we are organizing a tournament with cashprices called the LIG Tournament taking place on video games made inside of our association!</p>
              <p>The last edition I personally organized got 50 players in the same room competiting on network multiplayer games and on local multiplayer games</p>
            </div>
          </li>
        </ul>
      </div>
    </>

  )
}
