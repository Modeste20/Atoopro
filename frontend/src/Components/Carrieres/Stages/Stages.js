import { Col, Row } from 'antd'
import React from 'react'
import { FadeComponent } from '../../Shared/FadeComponent/FadeComponent'
import ImageHomeBannerPc from './../../../File/images/home-banner-pc.svg'
import AtooProImage from './../../../File/images/banner.jpg'
import SectionContact from '../../Shared/SectionContact/SectionContact'
import {Helmet} from 'react-helmet'
import './Stages.css'

const Stages = () => {

    return (

        <div className="atoopro-alternances">

            <Helmet>
                <title>Stages et Alternaces | Atoopro</title>
                <meta name="description" content="Contenu de la page de stages et alternances" />
            </Helmet>

            {
                /* Bannière */
            }

            <div className="banner">
                <Row gutter={[15, 30]} justify='space-between' align='center' className="banner-section">
                    <Col xs={24} md={12} lg={12} className='banner-section-content'>
                        <FadeComponent left>
                            <h1 className='banner-section-title'>
                                Stages et Alternances
                            </h1>
                        </FadeComponent>
                        <FadeComponent bottom delay={500}>
                            <p className='banner-section-content'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo nihil, exercitationem, illo officia sit, qui eos vero sapiente totam facilis mollitia soluta. Consectetur laboriosam illo laborum dignissimos, veritatis ea.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus aliquam, laborum modi enim eum eveniet repellendus suscipit nesciunt in. In sequi iste maiores voluptas, tempora eum vero corrupti optio.
                            </p>
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={18} md={12} lg={8} className='banner-section-image'>
                        <img alt='' src={ImageHomeBannerPc} width='100%' />
                    </Col>
                </Row>
            </div>

            {
                /* Définition de Atoopro  */
            }
            
            <section className="atoopro-def">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
                        <FadeComponent left>
                            <img src={AtooProImage} style={{ borderRadius: 10 }} width='80%' alt="Qu'est ce que Atoo Pro" />
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
                        <FadeComponent top delay={500}>
                            <h2>Stages et autres</h2>
                        </FadeComponent>
                        <FadeComponent right>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel quaerat inventore recusandae ducimus repudiandae ratione nulla eaque, molestiae cupiditate sit illo. Corrupti ipsa, aliquam ea ullam minus consectetur voluptatem.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aspernatur dolore, hic beatae perferendis, amet labore, assumenda doloremque ipsam quas veniam ad repudiandae totam nemo ratione obcaecati suscipit optio. Hic!</p>
                        </FadeComponent>
                    </Col>
                </Row>
            </section>

            {
                /* Mission  */
            }

            <section className="atoopro-mission">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-mission-content'>
                        <FadeComponent bottom>
                            <h2>Alternances et autres</h2>
                        </FadeComponent>
                        <FadeComponent top delay={500}>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel quaerat inventore recusandae ducimus repudiandae ratione nulla eaque, molestiae cupiditate sit illo. Corrupti ipsa, aliquam ea ullam minus consectetur voluptatem.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aspernatur dolore, hic beatae perferendis, amet labore, assumenda doloremque ipsam quas veniam ad repudiandae totam nemo ratione obcaecati suscipit optio. Hic!</p>

                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-mission-image'>
                        <FadeComponent right>
                            <img src={AtooProImage} style={{ borderRadius: 10 }} width='80%' alt="Qu'est ce que Atoo Pro" />
                        </FadeComponent>
                    </Col>

                </Row>
            </section>

            {
                /* Section de contact */
            }

            <SectionContact title={'Déposer ma candidature'} option={'cv'}>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, consequuntur aut? Eius fuga aspernatur delectus sed hic, a, quo omnis, corrupti recusandae inventore dolor voluptates id voluptatibus enim dolorum eligendi.
                </p>
            </SectionContact>

            {
                /*last section*/
            }
            
            <section className="atoopro-def">
                <Row justify='center'>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-image'>
                        <FadeComponent left>
                            <img src={AtooProImage} style={{ borderRadius: 10 }} width='80%' alt="Qu'est ce que Atoo Pro" />
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={22} md={12} className='atoopro-def-content'>
                        <FadeComponent top delay={500}>
                            <h2>Stages et autres</h2>
                        </FadeComponent>
                        <FadeComponent right>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam, vel quaerat inventore recusandae ducimus repudiandae ratione nulla eaque, molestiae cupiditate sit illo. Corrupti ipsa, aliquam ea ullam minus consectetur voluptatem.
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt aspernatur dolore, hic beatae perferendis, amet labore, assumenda doloremque ipsam quas veniam ad repudiandae totam nemo ratione obcaecati suscipit optio. Hic!</p>
                        </FadeComponent>
                    </Col>
                </Row>
            </section>
        </div>

    )
}

export default Stages