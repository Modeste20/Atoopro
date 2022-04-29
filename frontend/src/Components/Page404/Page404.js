import { Button, Col, Row } from 'antd'
import React, { useContext, useEffect } from 'react'
import './Page404.css'
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext'
import { ReactComponent as Astronaute } from './astronaute.svg';
import { ReactComponent as AstronauteDark } from './astronaute-dark.svg';
import { Link, useHistory } from 'react-router-dom'
import Helmet from 'react-helmet'


//Page 404

const Page404 = () => {
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        const topElement = document.querySelector('footer')
        console.log(topElement)
        if (topElement) {
            topElement.style.display = 'none'
        }
        return () => {
            topElement.style.display = 'block'
        }
    })
    return (
        <Row justify='space-around' style={{ height: '100%' }} className='section-404'>
            <Helmet>
                <title>Page 404</title>
                <meta name="description" content="Page d'accueil de Atoo pro" />
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
            </Helmet>
            <Col xs={24} sm={20} md={12} lg={10} className='svg-astronaute'>
                {
                    theme === 'light' ? <Astronaute /> : <AstronauteDark />
                }
            </Col>
            <Col xs={24} sm={20} md={12} lg={12} className='content'>
                <h1>404</h1>
                <h3>
                    Désolé la page que vous demandez est introuvable
                </h3>
                <Link to='/' className='btn-link-primary' style={{ height: 42, marginTop: 15 }}>Retour à l'acceuil</Link>
            </Col>
        </Row>
    )
}

export default Page404