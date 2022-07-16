import React from 'react'
import { Link } from 'react-router-dom'
import { FadeComponent } from '../FadeComponent/FadeComponent'
import ReactMarkdown from 'react-markdown'
import './SectionContact.css'
import Markdown from '../Markdown/Markdown'

/* Composant templates pour les sections de contact sur le site */

const SectionContact = ({title,children,link}) => {

  return (
    <section className="section-contact">
      <FadeComponent top>
        <h3>
          {title}
        </h3>
      </FadeComponent>

      <FadeComponent bottom>
        <Markdown>
          {children}
        </Markdown>
      </FadeComponent>

      <FadeComponent left>
        <Link to={link} className='btn-link-primary' style={{ height: 45, borderRadius: 3 }}>
          Contactez-nous
        </Link>
      </FadeComponent>

    </section>
  )
}

export default SectionContact