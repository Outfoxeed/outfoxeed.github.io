import React from 'react'
import './ContactElement.css'

export default function ContactElement({ children, linkName, logoClass, href }) {
  return (
    <>
        <div className={`contact-element contact-element--${linkName}`}>
            <div className={`contact-logo contact-logo--${linkName}`}>
                <a href={href} 
                    target="_blank"
                >
                    <i className={`contact-logo-link contact-logo-link--${linkName} ${logoClass}`} />
                </a>
            </div>
            <div className={`contact-link-container contact-link-container--${linkName}`}>
                <a className={`contact-link contact-link--${linkName}`} 
                    href={href} 
                    target="_blank"
                >
                    {children}
                </a>
            </div>
        </div>
    </>
  )
}
