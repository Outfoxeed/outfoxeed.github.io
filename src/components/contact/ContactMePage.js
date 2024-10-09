import React from 'react'
import Title from '../generics/title/Title'
import ContactElement from './ContactElement'
import './ContactMePage.css'

export default function ContactMePage() {
  return (
    <>
        <div className="contact-me-page">
            <Title>Contact Me</Title>

            <div className="contacts-container">
                
                <ContactElement 
                    linkName="phone"
                    logoClass="fa fa-phone"
                >
                    06 08 88 92 13
                </ContactElement>
                
                <ContactElement 
                    linkName="mail"
                    logoClass="fa fa-envelope" 
                    href="mailto:morigan0letourneau@gmail.com"
                >
                    morigan0letourneau@gmail.com
                </ContactElement>

                <ContactElement 
                    linkName="linkedin"
                    href="https://www.linkedin.com/in/morigan-letourneau-2188881ba/"
                    logoClass="fab fa-linkedin"
                >
                    Linkedin
                </ContactElement>
                
                <ContactElement 
                    linkName="github"
                    logoClass="fab fa-github"
                    href="https://github.com/Outfoxeed"
                >
                    GitHub
                </ContactElement>
                
                <ContactElement 
                    linkName="itchio"
                    logoClass="fab fa-itch-io"
                    href="https://outfoxeed.itch.io/"
                >
                    Itch.io
                </ContactElement>
            </div>
        </div>
    </>
  )
}
