import { Col, Row } from 'antd'
import React, { useContext } from 'react'
import SessionServices from './SectionServices/Sessionservices'
import SectionContact from './../../Shared/SectionContact/SectionContact.js'
import './ServiceComponent.css'
import { FadeComponent } from '../FadeComponent/FadeComponent'
import Markdown from '../Markdown/Markdown'
import { LangContext } from '../Context/LangContext/LangContext'
import delve from 'dlv'

//Composant templates pour les pages de services 

const ServiceComponent = ({ className, banniere, content,image , section_contact, children }) => {

    const {lang} = useContext(LangContext)
    
    return (
        <div className={"service-cmp service-" + className}>

        {/*
            Bannière
        */}
            <Row justify='space-between' align='center' className='banner' style={{ alignItems: 'center', marginTop: 70, marginBottom: 150 }}>

                <Col xs={22} sm={19} md={12} className="banner-content">
                    <FadeComponent top>
                        <h1>{delve(banniere,"title")}</h1>
                    </FadeComponent>
                    <FadeComponent delay={300} bottom>
                        <Markdown>
                            {delve(banniere,"description")}
                        </Markdown>
                        
                    </FadeComponent>

                </Col>

                <Col xs={22} sm={19} md={7} className="banner-image">
                    <FadeComponent right>
                            {image}
                    </FadeComponent>
                </Col>
            </Row>

            {/*
                Description du service (style dans le fichier css
                de la page concernée)
            */}

            <section className='service-description' style={{ width: '75%', margin: '0 auto 70px auto' }}>
                <FadeComponent left>
                    <h2>{lang === 'fr' ? "Description du service" : "Description of service" }</h2>
                </FadeComponent>
                <div className="description-content" >
                    <Markdown>
                        {
                            content
                        }
                    </Markdown>
                </div>

            </section>

            {
                /*
                    Contact Section
                */
            }

            <SectionContact title={delve(section_contact,"title")}>
                {delve(section_contact,"description")}
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