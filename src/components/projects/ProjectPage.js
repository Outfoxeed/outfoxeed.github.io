import React from 'react'
import { useParams } from 'react-router-dom'
import './ProjectPage.css'

export default function ProjectPage({ projectsData }) {
    const { projectId } = useParams();
    const projectData = projectsData[projectId];
  return (
    <>
        <div className="project-page">
            <h2 className="project-title">{projectData.title}</h2>

            <div className="first-cover">
                {projectData.firstCover.youtube &&
                     <iframe className="first-cover-youtube" width="840" height="473" 
                     src={projectData.firstCover.youtube} 
                     title="YouTube video player" 
                     frameborder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                     referrerpolicy="strict-origin-when-cross-origin"
                     allowfullscreen></iframe>
                }
                {projectData.firstCover.image &&
                    <img className="first-cover-image" src={projectData.firstCover.image} />
                }
            </div>

            {/* Icons  */}
            <div className="icons">
                {projectData.links && 
                    <div className="icons-links">
                        {projectData.links.steam &&
                            <a href={projectData.links.steam} target="_blank" rel="noreferrer">
                                <img className="icons-link-steam" src="/images/icons/steam-icon.png" alt="" />
                            </a>
                        }
                        {projectData.links.itchio &&
                            <a href={projectData.links.itchio} target="_blank" rel="noreferrer">
                                <img className="icons-link-itchio" src="/images/icons/itchio-icon.png" alt="" />
                            </a>
                        }
                    </div>
                }
                <div className="icons-engine">
                    { projectData.engine && 
                        <img className={"icons-engine-"+projectData.engine.toLowerCase()}
                         src={"/images/icons/"+projectData.engine.toLowerCase()+"-icon.png"} 
                         alt={projectData.engine}/>
                    }
                </div>
            </div>

            {/* Infos  */}
            <div className="tag">
                <p>{projectData.tag}</p>
            </div>
            <div className="info pitch">
                <i>Pitch: </i>
                <b>{projectData.shortDesc}</b>
            </div>
            <div className="info links">
                {projectData.links && 
                    <>
                        <i>Links: </i>
                        {projectData.links.steam && 
                            <b><a href={projectData.links.steam} target="_blank" rel="noreferrer">Steam Page</a>, </b>}
                        {projectData.links.itchio &&
                            <b><a href={projectData.links.itchio} target="_blank" rel="noreferrer">Itch.io Page</a></b>}
                    </>
                }
            </div>
            {projectData.releaseDate && 
                <div className="info release-date">
                    <i>Release Date: </i>
                    <b>{projectData.releaseDate}</b>
                </div>
            }
            <div className="info period">
                <i>Period: </i>
                <b>{projectData.period}</b>
            </div>
            <div className="info engine">
                <i>Engine: </i>
                <b>{projectData.engine}</b>
            </div>

            {/* My Work */}
            <div className="my-work">
                <div className="info my-work-role">
                    <i>My Work: </i>
                    <b>{projectData.myWork.role}</b>
                </div>
                { projectData.myWork.achievements &&
                    <div className="my-work-achievements">
                        {projectData.myWork.achievements.map(x => {
                            return (
                                <div className="my-work-achievement">
                                    {x.name && <p>{x.name}:</p>}
                                    <ul>
                                        {x.composite && x.composite.map(y => {
                                            return (
                                                <li>- {y}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>

            {/* Team */}
            <div className="team">
                {projectData.team.name &&
                    <div className="info team-name">
                        <i>Team: </i>
                        <b>
                            {projectData.team.url
                                ? <a href={projectData.team.url} target='_blank' rel="noreferrer">{projectData.team.name}</a>
                                : projectData.team.name
                            }
                        </b>
                    </div>
                }
                <div className="info team-size">
                    <i>Team size: </i>
                    <b>{projectData.team.size}</b>
                </div>
                {projectData.team.members &&
                    <div className="team-members">
                        <ul>
                            {projectData.team.members.map(member => {
                                return (
                                    <li className="team-member">- {member}</li>
                                )
                            })}
                        </ul>
                    </div>
                }
            </div>

            {/* Medias */}
            {projectData.medias &&
                <div className="medias">
                    <h3 className="medias-title">Medias:</h3>
                    <div className="medias1">
                        {projectData.medias.map(media => {
                            return (
                                <img className="media media1" src={media} />
                            )
                        })}
                    </div>
                    {projectData.medias2 &&
                        <div className="medias2">
                            {projectData.medias2.map(media => {
                                return (
                                    <img className="media media2" src={media} />
                                )
                            })}
                        </div>
                    }
                </div>
            }
        </div>

    </>
  )
}
