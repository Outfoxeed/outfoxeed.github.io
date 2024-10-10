import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './ProjectTile.css'

export default function ProjectTile({ projectData }) {
    const [hovered, setHovered] = useState(false);
    const href = "/project/" + projectData.id;
  
    return (
    <div className="project-tile">
        <div className="project-tile-cover-container">
            <Link to={href}>
                <img className="project-tile-cover" 
                src={hovered ? projectData.hoverSplashart : projectData.splashart} 
                alt={projectData.shortDesc}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}/>
            </Link>
        </div>
        <div className="project-info-container">
            <h3 className="project-title">
                <Link to={href}>
                    {projectData.title}
                </Link>
            </h3>
            <p>{projectData.engine} | {projectData.team.shortDesc} | {projectData.period}</p>
        </div>
    </div>
  )
}
