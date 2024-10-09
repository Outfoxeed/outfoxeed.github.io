import React from 'react'
import './ProjectsLibrary.css'
import ProjectTile from '../tiles/ProjectTile';
import Title from '../../generics/title/Title';

export default function ProjectsLibrary({ projectsData }) {
  const projectToShow = [
    projectsData.justdance,
    projectsData.kanpeki,
    projectsData.alinco,
  ];

  return (
    <>
        <div className="project-library">
          <Title>My Projects</Title>
          <div className="projects-container">
            { projectToShow &&
              projectToShow.map((x) => {
                return (
                  <ProjectTile 
                    projectData={x}/>
                )
              })
            }
          </div>
        </div>
    </>
  )
}
