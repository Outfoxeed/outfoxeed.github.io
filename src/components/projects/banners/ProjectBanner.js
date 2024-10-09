import React, { useState } from 'react'
import './ProjectBanner.css'

export default function ProjectBanner({ projectData, reversed }) {
    const [imageHovered, setImageHovered] = useState(false);
    const checkImage = imageHovered ? projectData.hoverSplashart : projectData.splashart;

    const href = "/project/" + projectData.id;

    return (
    <> 
        {projectData &&
            <div className={`project-banner project-banner--${reversed ? "reversed" : "default"}`}>
                <div className="image-container">
                    <a href={href}>
                        <img src={checkImage} 
                        alt={projectData.title} 
                        onMouseEnter={() => setImageHovered(true)}
                        onMouseLeave={() => setImageHovered(false)}/>
                    </a>
                </div>
                <div className="description-container">
                    <div>
                        <h2 className="project-title">
                            <a href={href}>
                                {projectData.title}
                            </a>
                        </h2>
                        <div className="links-container">
                            {projectData.links &&
                                Object.entries(projectData.links).map(([key, value]) => (
                                    <div className="link-container">
                                        <a href={value} target='_blank'>{key.charAt(0).toUpperCase()+key.slice(1)}</a>
                                        <p> - </p>
                                    </div>
                                ))}
                        </div>
                    </div>

                    <div>
                        <p className="role">{projectData.myWork.role}</p>
                        <div className="project-info-container">
                            <p>{projectData.engine} | {projectData.team.shortDesc} | {projectData.period}</p>
                        </div>
                    </div>

                    <div>
                        <p className="short-desc">{projectData.shortDesc}</p>
                    </div>
                </div>
            </div>
        }
    </>
    )
}
