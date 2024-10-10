import React from 'react'
import './ProjectsLibrary.css'
import ProjectTile from '../tiles/ProjectTile';
import Title from '../../generics/title/Title';

export default function ProjectsLibrary({ projectsData }) {
  return (
    <>
        <div className="project-library">
          <Title>My Projects</Title>
          <div className="projects-container">
            { projectsData &&
              Object.entries(projectsData).map(([key, value]) => (
                <ProjectTile 
                    projectData={value}/>
            ))}
          </div>
        </div>
    </>
  )
}
