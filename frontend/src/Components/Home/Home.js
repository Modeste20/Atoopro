import { Col, Row } from 'antd'
import React, { useContext, useRef} from 'react'
import {ReactComponent as ImageHomeBannerPc } from './../../File/images/home-banner-pc.svg'
import Accordeon from './Components/Accordeon/Accordeon'
import Partenaires from './Components/Partenaires/Partenaires'
import ServiceCard from './Components/ServiceCard/ServiceCard'
import ServiceTable from './Components/ServiceData/Service.data'
import './Home.css'
import { FadeComponent } from '../Shared/FadeComponent/FadeComponent'
import { Link, useLocation } from 'react-router-dom'
import AnimateNumber from './Components/AnimateNumber/AnimateNumber'
import { AdminContext } from '../Shared/Context/AdminContext/AdminContext'
import {Helmet} from 'react-helmet'
import {withTranslation} from 'react-i18next'

const Home = ({t}) => {

    // t  pour la translation

    const ref = useRef(null)

    const { hash } = useLocation()

    console.log(hash)

    const isAdmin = useContext(AdminContext)

    //FadeComponent pour l'animation


    return (
        <div className="atoopro-home">
        <Helmet>
            <title>Page d'accueil du site d'atoopro | Atoopro</title>
            <meta name="description" content="Page d'accueil de Atoo pro" />
        </Helmet>

        {/* Bannière */}

                <Row justify='space-between' className='banner-home'>
                    <Col xs={24} md={12} lg={12} xxl={14} className='banner-text'>
                        <FadeComponent left>

                            <h1 className='pb-2'>{t('banner.title','Bienvenue sur Atoo pro')}</h1>

                            <p>{t('banner.paragraphe')}</p>

                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima rerum nemo provident laborum veritatis, vel necessitatibus magnam ipsam omnis numquam quam totam iusto earum incidunt ipsum quasi! Deserunt, mollitia.
                            </p>

                            <div style={{ display: 'flex' , alignItems:'center' }}>
                                <Link className='banner-button-contact btn-link-primary' to='/contactez-nous' style={{ marginTop: 25, height: 45, padding:'0 15px !important',borderRadius: 5 }}>{t('banner.button')}</Link>
                                {
                                    isAdmin && <Link style={{marginLeft:15}} to='/admin'>Admin account</Link>
                                }
                            </div>
                        </FadeComponent>
                    </Col>

                    <Col xs={24} md={12} lg={8} xxl={8} className='banner-image'>
                        <FadeComponent right>
                            <div className='img'>
                                {/*<img src={ImageHomeBannerPc} alt='r' width={'100%'} className='' />*/}
                                <ImageHomeBannerPc />
                            </div>
                        </FadeComponent>

                    </Col>
                </Row>

            {/* Section des statistics */}

            <section className="statistics">
                <FadeComponent top>
                    <h2 className='section-title'>Nos statistiques</h2>
                </FadeComponent>
                <Row className='row-statistics'>
                    <Col xs={24} sm={12} md={6} className='statistic'>
                        <div className='st'>

                        {/* AnimateNumber pour animer les nombres sur l'accueil */}

                            <AnimateNumber end={5} />

                            <FadeComponent bottom distance='10px'>
                                <p>Partenaires</p>
                            </FadeComponent>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6} className='statistic'>
                        <div className='st'>
                            <AnimateNumber end={5} />

                            <FadeComponent bottom distance='10px'>
                                <p>Partenaires</p>
                            </FadeComponent>

                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6} className='statistic'>
                        <div className='st'>
                            <AnimateNumber end={5} needSuffix />

                            <FadeComponent bottom distance='10px'>
                                <p>Dossiers étudiés par mois</p>
                            </FadeComponent>
                        </div>
                    </Col>

                    <Col xs={24} sm={12} md={6} className='statistic'>
                        <div className='st'>
                            <AnimateNumber end={5} />
                            <FadeComponent bottom distance='10px'>
                                <p>Dossiers étudiés par mois</p>
                            </FadeComponent>
                        </div>
                    </Col>

                </Row>
            </section>

            {/* Section des services */}

            <section className="services">
                <FadeComponent top delay={500}>
                    <h2 className='section-title'>Nos services</h2>
                </FadeComponent>
                <Row className='row-services'>
                    {
                        ServiceTable.map(elmt => <ServiceCard key={elmt.className} {...elmt} >{elmt.children}</ServiceCard>)
                    }
                </Row>
            </section>

            {/* Section des partenaires */}

            <section className='partenaires' id='partenaires' ref={ref}>
                <FadeComponent top>
                    <h2 className='title'>Nos partenaires</h2>
                </FadeComponent>
                <Partenaires />
            </section>


            {/* FAQ */}

            <section className="faq">
                <Row justify='center'>
                    <Col xs={24} md={19} lg={15} xl={12}>
                        <FadeComponent top>
                            <h2 className='section-title faq-title' style={{ padding: '30px 0' }}>Foire aux questions</h2>
                        </FadeComponent>
                        <Accordeon />
                    </Col>
                </Row>
            </section>
        </div>
    )
}

//withTranslation : composant d'ordre supérieur permettant de prendre en charge le props t pour la traduction

export default withTranslation('home')(Home)
