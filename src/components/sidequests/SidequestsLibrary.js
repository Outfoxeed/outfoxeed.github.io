import React from 'react'
import './SidequestsLibrary.css'
import Title from '../generics/title/Title';

export default function SidequestsLibrary({ sidequestsData }) {
  return (
    <>
        <div className="sidequests-library">
          <Title>Side Quests</Title>
          <div className="sidequests-container">
            { sidequestsData &&
              Object.entries(sidequestsData).map(([key, value]) => (
                <div>
                  <h2>{value.title}</h2>
                  <h3>{value.shortDesc}</h3>
                </div>
            ))}
          </div>
        </div>
    </>
  )
}
