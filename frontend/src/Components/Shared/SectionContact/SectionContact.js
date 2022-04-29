import { Button } from 'antd'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FadeComponent } from '../FadeComponent/FadeComponent'
import './SectionContact.css'

/* Composant templates pour les sections de contact sur le site */

const SectionContact = ({title,children,option}) => {

  return (
    <section className="section-contact">
      <FadeComponent top>
        <h3>
          {title}
        </h3>
      </FadeComponent>
        {children}
      <FadeComponent left>
        <Link to={option ? '/contactez-nous?option='+option : '/contactez-nous'} className='btn-link-primary' style={{ height: 45, borderRadius: 3 }}>
          Contactez-nous
        </Link>
      </FadeComponent>

    </section>
  )
}

export default SectionContact