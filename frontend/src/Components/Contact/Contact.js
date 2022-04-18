import { Button, Col, Divider, Menu, Row } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext';
import { FadeComponent, ZoomComponent } from '../Shared/FadeComponent/FadeComponent';
import useQuery from '../Shared/useQuery/useQuery';
import FormContact from './Component/FormContact/FormContact';
import Map from './Component/Map/Map';
import queryString from 'query-string'
import './Contact.css'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
}

const Contact = () => {

    const { theme } = useContext(ThemeContext)

    const query = useQuery()
    const {search} = useLocation()
    const [selectDevis,setSelectDevis] = useState(false)


    console.log('sele',selectDevis)

    const {push} = useHistory()

    return (
        <div className="atoopro-contact">


            <Row justify='space-between' className='form-map'>
                <Col xs={24} md={15} lg={12} className='form-contact'>
                    <div className="contact-head">
                        <FadeComponent left duration={1000}>
                            <h1>
                                Contactez-nous
                            </h1>
                        </FadeComponent>
                        <FadeComponent bottom delay={300}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deleniti eveniet iusto omnis, veritatis placeat doloremque vero autem vitae tenetur nemo ad quisquam aliquam excepturi suscipit cumque, laudantium unde pariatur?</p>
                        </FadeComponent>
                    </div>
                    <FormContact selectDevis={selectDevis} />
                </Col>
                <Col xs={24} md={9} lg={12} className='map' id='google-map'>
                    <Map /*location={location} zoomLevel={17}*/ />
                </Col>
            </Row>

            {/*<Row align='space-between' className='others-contact-infos'>
                <Col xs={24} sm={8} className='other-info'>
                    <div className="icns">
                        <FaIcons.FaMapMarker className='map-icn icn' />
                    </div>
                    <div className="content-icns">
                        <span className='adress'>198 West 21th Street, Suite 721 New York NY 10016</span>
                    </div>
                </Col>

                <Col xs={24} sm={8} className='other-info'>
                    <div className="icns">
                        <FaIcons.FaPhone className='phone-icn icn' />
                    </div>
                    <div className="content-icns">
                        <span className='adress'>
                            <a href='tel:+33 1258755' className='link' style={{ fontFamily: 'Lato' }}>+33 125875548 </a>
                        </span>
                    </div>
                </Col>

                <Col xs={24} sm={8} className='other-info'>
                    <div className="icns">
                        <FaIcons.FaEnvelope className='mail-icn icn' />
                    </div>
                    <div className="content-icns">
                        <span className='adress'>
                            <a href='mailto:jojomodeste52@gmail.com' className='link'>Jojomodeste52@gmail.com</a>
                        </span>
                    </div>
                </Col>

            </Row>*/}


            <div className="recrutement">
                <FadeComponent top>
                    <h3 >RECRUTEMENT</h3>
                </FadeComponent>
                <Row align='space-between' justify='center'>
                    <Col xs={24} sm={15} md={8}>
                        <FadeComponent left delay={500}>
                            <h2 className='join-head' style={{ fontSize: 29, fontWeight: 800 }}>Rejoignez-nous.</h2>
                        </FadeComponent>
                    </Col>
                    <Col xs={24} sm={9} md={5} className='btn-postuler' style={{ textAlign: 'right' }}>
                        <FadeComponent right>
                            <Link className='btn-link-primary' style={{ width: 150, height: 50, borderRadius: 4, fontWeight: '600 !important', fontSize: 16 }} to='/carrieres/nos-offres-demplois'>Postuler <FaIcons.FaArrowRight style={{ marginLeft: 5 }} /></Link>
                        </FadeComponent>
                    </Col>
                    <div className="divider" style={{ height: 2, width: '100%', margin: '15px 0 25px 0', background: theme === 'dark' ? '#087cad' : '#25A8E0' }}></div>
                </Row>
                <Col xs={24} sm={20} md={17} lg={12} style={{ margin: '20px 0 50px 0', fontSize: 15 }}>
                    <FadeComponent bottom>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugit vel placeat perspiciatis tenetur quam ab id, dolorem, impedit amet ex nihil laboriosam pariatur expedita, obcaecati quisquam magni consectetur beatae.</p>
                    </FadeComponent>
                </Col>
            </div>


        </div>
    )

};

export default Contact;
