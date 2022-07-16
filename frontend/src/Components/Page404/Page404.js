import { Col, Row } from 'antd'
import React, { useContext, useEffect } from 'react'
import './Page404.css'
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext'
import { ReactComponent as Astronaute } from './astronaute.svg';
import { ReactComponent as AstronauteDark } from './astronaute-dark.svg';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'
import { withTranslation } from 'react-i18next';


//Page 404

const Page404 = ({t}) => {

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
        <Row justify='space-around' className='section-404'>
            
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
                    {
                        t('message')
                    }
                </h3>
                <Link to='/' className='btn-link-primary' style={{ height: 42, marginTop: 15 }}>{t('home')}</Link>
            </Col>
            
        </Row>
    )
}

export default withTranslation('page404')(Page404)