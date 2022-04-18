import { Button, Col, Row } from 'antd'
import React, { useContext } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext/ThemeContext'
import { FadeComponent } from '../../FadeComponent/FadeComponent'
import Hebergement from './../../../../File/images/hebergement.svg'

const SessionServices = () => {

    const { theme } = useContext(ThemeContext)
    const { pathname } = useLocation()
    const {push} = useHistory()

    return (
        <section className='other-services'>
            {
                pathname !== '/services/hebergement' &&
                <Row justify='space-around' className={'service service-hebergement ' + (pathname === '/services/assistance' ? 'right' : '')} style={{ margin: '80px 0 100px 0' }} align='center'>
                    <Col xs={22} sm={18} md={8} className='service-image'>
                        <FadeComponent top distance='30px'>
                            <img src={Hebergement} alt='Hébergement' width={'100%'} />
                        </FadeComponent>
                    </Col>

                    <Col xs={24} sm={18} md={10} className='service-content' style={{ marginTop: 45 }}>
                        <FadeComponent left>
                            <h2>Hébergement</h2>
                        </FadeComponent>
                        <FadeComponent bottom>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit omnis, excepturi dolores sapiente consequatur ea voluptas nobis beatae quam. Vero ratione nulla expedita omnis a quo doloremque provident obcaecati?
                            </p>
                        </FadeComponent>
                        <FadeComponent top>
                            <Button type='ghost' onClick={() => push('/services/hebergement')} className={'more ' + (theme === 'light' ? '' : 'more-dark')} style={{ fontWeight: 600, height: 45, marginTop: 8, border: '2px solid ' + (theme === 'light' ? '#25A8E0' : '#1a52bb'), color: (theme === 'light' ? '#25A8E0' : '#1a52bb') }}>En savoir plus sur l'hébergement</Button>
                        </FadeComponent>
                    </Col>
                </Row>
            }


            {
                pathname !== '/services/assistance' && <Row justify='space-around' className='service service-assistance left' style={{ margin: '80px 0 100px 0' }} align='center'>


                    <Col xs={24} sm={18} md={10} className='service-content' style={{ marginBottom: 45 }}>
                        <FadeComponent left>
                            <h2>Assistance</h2>
                        </FadeComponent>
                        <FadeComponent bottom>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit omnis, excepturi dolores sapiente consequatur ea voluptas nobis beatae quam. Vero ratione nulla expedita omnis a quo doloremque provident obcaecati?
                            </p>
                        </FadeComponent>
                        <FadeComponent top>
                            <Button type='ghost' onClick={() => push('/services/assistance')} className='more' style={{ fontWeight: 600, height: 45, marginTop: 8, border: '2px solid ' + (theme === 'light' ? '#25A8E0' : '#1a52bb'), color: (theme === 'light' ? '#25A8E0' : '#1a52bb') }}>En savoir plus sur l'assistance</Button>
                        </FadeComponent>
                    </Col>
                    <Col xs={22} sm={18} md={8} className='service-image'>
                        <FadeComponent top distance='30px'>
                            <img src={Hebergement} alt='Hébergement' width={'100%'} />
                        </FadeComponent>
                    </Col>
                </Row>
            }


            {
                pathname !== '/services/developpement' && <Row justify='space-around' className='service service-developpement' style={{ margin: '50px 0 100px 0' }} align='center'>
                    <Col xs={22} sm={18} md={8} className='service-image'>
                        <FadeComponent top distance='30px'>
                            <img src={Hebergement} alt='Hébergement' width={'100%'} />
                        </FadeComponent>
                    </Col>

                    <Col xs={24} sm={18} md={10} className='service-content' style={{ marginTop: 45 }}>
                        <FadeComponent left>
                            <h2>Développement</h2>
                        </FadeComponent>
                        <FadeComponent bottom>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit omnis, excepturi dolores sapiente consequatur ea voluptas nobis beatae quam. Vero ratione nulla expedita omnis a quo doloremque provident obcaecati?
                            </p>
                        </FadeComponent>
                        <FadeComponent top>
                            <Button type='ghost' onClick={() => push('/services/developpement')} className='more' style={{ fontWeight: 600, height: 45, marginTop: 8, border: '2px solid ' + (theme === 'light' ? '#25A8E0' : '#1a52bb'), color: (theme === 'light' ? '#25A8E0' : '#1a52bb') }}>En savoir plus sur le développement</Button>
                        </FadeComponent>
                    </Col>
                </Row>
            }


            {
                pathname !== '/services/communications-unifiees' && <Row justify='space-around' className={'service service-communications left ' + (pathname === '/services/developpement' ? 'image-left' : '')} style={{ margin: '50px 0 100px 0' }} align='center'>


                    <Col xs={24} sm={18} md={10} className='service-content' style={{ marginBottom: 45 }}>
                        <FadeComponent left>
                            <h2>Communications unifiées</h2>
                        </FadeComponent>
                        <FadeComponent bottom>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate suscipit omnis, excepturi dolores sapiente consequatur ea voluptas nobis beatae quam. Vero ratione nulla expedita omnis a quo doloremque provident obcaecati?
                            </p>
                        </FadeComponent>
                        <FadeComponent top>
                            <Button type='ghost' onClick={() => push('/services/communications-unifiees')} className='more' style={{ fontWeight: 600, height: 45, marginTop: 8, border: '2px solid ' + (theme === 'light' ? '#25A8E0' : '#1a52bb'), color: (theme === 'light' ? '#25A8E0' : '#1a52bb') }}>En savoir plus sur la communication unifiées</Button>
                        </FadeComponent>
                    </Col>

                    <Col xs={22} sm={18} md={8} className='service-image'>
                        <FadeComponent top distance='30px'>
                            <img src={Hebergement} alt='Hébergement' width={'100%'} />
                        </FadeComponent>
                    </Col>
                </Row>
            }

        </section>

    )
}

export default SessionServices