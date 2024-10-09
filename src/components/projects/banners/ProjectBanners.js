import React from 'react';
import ProjectBanner from './ProjectBanner';
import './ProjectBanners.css';

export default function ProjectBanners({ projects }) {
    let reversed = true;

  return (
    <>  
        <div className='project-banners'>
            <div className="project-banners-container">
                <ul>
                    {projects && projects.map(x => {
                        reversed = !reversed;
                        return (
                        <li>
                            <ProjectBanner projectData={x} reversed={reversed}></ProjectBanner>
                        </li>)
                    })}
                </ul>
            </div>
        </div>
    </>
  )
}
