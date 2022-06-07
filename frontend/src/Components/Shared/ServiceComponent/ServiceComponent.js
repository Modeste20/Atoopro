import { Col, Row } from 'antd'
import React from 'react'
import SessionServices from './SectionServices/Sessionservices'
import SectionContact from './../../Shared/SectionContact/SectionContact.js'
import './ServiceComponent.css'
import { FadeComponent } from '../FadeComponent/FadeComponent'

//Composant templates pour les pages de services 

const ServiceComponent = ({ className, title, banniere, content, children }) => {
    return (
        <div className={"service-cmp service-" + className}>

        {/*
            Bannière
        */}
            <Row justify='space-between' align='center' className='banner' style={{ alignItems: 'center', marginTop: 70, marginBottom: 150 }}>

                <Col xs={22} sm={19} md={12} className="banner-content">
                    <FadeComponent top>
                        <h1>{title}</h1>
                    </FadeComponent>
                    <FadeComponent delay={300} bottom>
                        <p>
                            {banniere.description}
                        </p>
                    </FadeComponent>

                </Col>

                <Col xs={22} sm={19} md={7} className="banner-image">
                    <FadeComponent right>
                        <img src={banniere.img} alt={title} width='100%' />
                    </FadeComponent>
                </Col>
            </Row>

            {/*
                Description du service (style dans le fichier css
                de la page concernée)
            */}

            <section className='service-description' style={{ width: '75%', margin: '0 auto 70px auto' }}>
                <FadeComponent left>
                    <h2>Description du service</h2>
                </FadeComponent>
                <div className="description-content" >
                    {
                        content
                    }
                </div>

            </section>

            {
                /*
                    Contact Section
                */
            }

            <SectionContact title={"Avez-vous des points d'ombres ? des préoccupations ?"}>
                <FadeComponent bottom>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis similique, quod commodi nemo officiis cum. Molestiae veniam alias distinctio, in accusamus illum modi vitae quibusdam, doloremque nemo soluta, expedita ad!
                    </p>
                </FadeComponent>

            </SectionContact>

            {/*
                Section spécifique à la section (style dans le fichier css
                de la page concernée)
            */}

            <section>
                <h2>Section spécifique au service</h2>
                {children}
            </section>

            {/* Autres Services */}

            <SessionServices />

        </div>
    )
}

export default ServiceComponent