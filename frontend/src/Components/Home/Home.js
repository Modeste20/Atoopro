import { Button, Col, Row } from 'antd'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ImageHomeBannerPc from './../../File/images/home-banner-pc.png'
import FaqSvg1 from './../../File/images/faq.svg'
import Accordeon from './Components/Accordeon/Accordeon'
import Partenaires from './Components/Partenaires/Partenaires'
import ServiceCard from './Components/ServiceCard/ServiceCard'
import ServiceTable from './Components/ServiceData/Service.data'
import './Home.css'
import { FadeComponent } from '../Shared/FadeComponent/FadeComponent'
import { Link, useHistory, useLocation } from 'react-router-dom'
import AnimateNumber from './Components/AnimateNumber/AnimateNumber'
import { AdminContext } from '../Shared/Context/AdminContext/AdminContext'

const Home = () => {

    const ref = useRef(null)

    const { hash } = useLocation()

    console.log(hash)

    const isAdmin = useContext(AdminContext)


    return (
        <div className="atoopro-home">
        Lorem
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                <Row justify='space-between' className='banner-home'>
                    <Col xs={24} md={12} lg={12} xxl={8} className='banner-text'>
                        <FadeComponent left>
                            <h1 className='pb-2'>Titre du texte</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias eius doloribus, nobis tempore maxime natus sed accusamus totam non repellendus magnam blanditiis quae debitis ducimus sint ab quod numquam consectetur?</p>
                            <div style={{ display: 'flex' , alignItems:'center' }}>
                                <Link className='banner-button-contact btn-link-primary' to='/contactez-nous' style={{ marginTop: 25, height: 45, width: 150, borderRadius: 5 }}>Contactez-nous</Link>
                                {
                                    isAdmin && <Link style={{marginLeft:15}} to='/admin'>Admin account</Link>
                                }
                            </div>
                        </FadeComponent>
                    </Col>

                    <Col xs={24} md={12} lg={8} xxl={6} className='banner-image'>
                        <FadeComponent right>
                            <div className='img'>
                                <img src={ImageHomeBannerPc} alt='r' width={'100%'} className='' />
                            </div>
                        </FadeComponent>

                    </Col>
                </Row>
            </div>
            <section className="statistics">
                <FadeComponent top>
                    <h2 className='section-title'>Nos statistiques</h2>
                </FadeComponent>
                <Row className='row-statistics'>
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

            <section className='partenaires' id='partenaires' ref={ref}>
                <FadeComponent top>
                    <h2 className='title'>Nos partenaires</h2>
                </FadeComponent>
                <Partenaires />
            </section>

            <section className="faq">
                {/*<div className="svg svg-1">
                    <img src={FaqSvg1} alt="" />
                </div>*/}
                <Row justify='center'>
                    <Col xs={24} md={19} lg={15} xl={12}>
                        <FadeComponent top>
                            <h2 className='section-title faq-title' style={{ padding: '30px 0' }}>Foire aux questions</h2>
                        </FadeComponent>
                        <Accordeon />
                    </Col>
                </Row>
                {/*<div className="svg svg-2">
                    <img src={FaqSvg1} alt="" />
                </div>*/}
            </section>
        </div>
    )
}


export default Home
