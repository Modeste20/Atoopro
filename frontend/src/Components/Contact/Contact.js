import { Col, Row } from 'antd';
import React, { useContext, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link} from 'react-router-dom';
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext';
import { FadeComponent, } from '../Shared/FadeComponent/FadeComponent';
import FormContact from './Component/FormContact/FormContact';
import Map from './Component/Map/Map';
import {Helmet} from 'react-helmet'
import { withTranslation } from 'react-i18next';
import './Contact.css'



const Contact = ({t}) => {

    //Récupérer le thème courant

    const { theme } = useContext(ThemeContext)

    const [selectDevis, setSelectDevis] = useState(false)


    console.log('sele', selectDevis)


    return (
        <div className="atoopro-contact">

            <Helmet>
                <title>Contactez-nous | Atoopro</title>
                <meta name="description" content="Contenu de la page de contact" />
            </Helmet>

            {/*
            
                Formulaire de contact + map

            */}

            <Row justify='space-between' className='form-map'>
                <Col xs={24} md={15} lg={12} className='form-contact'>
                    <div className="contact-head">
                        <FadeComponent left duration={1000}>
                            <h1>
                                {t('title')}
                            </h1>
                        </FadeComponent>
                        <FadeComponent bottom delay={300}>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam deleniti eveniet iusto omnis, veritatis placeat doloremque vero autem vitae tenetur nemo ad quisquam aliquam excepturi suscipit cumque, laudantium unde pariatur?</p>
                        </FadeComponent>
                    </div>
                    {/* Form contact */}
                    <FormContact selectDevis={selectDevis} />
                </Col>
                {/* Map */}
                <Col xs={24} md={9} lg={12} className='map' id='google-map'>
                    <Map />
                </Col>
            </Row>


            {/*
            
                Recrutement

            */}

            <section className="recrutement">
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
                            <Link className='btn-link-primary' style={{ width: 150, height: 50, borderRadius: 4, fontWeight: '600 !important', fontSize: 16 }} to='/carrieres/nos-metiers'>Postuler <FaIcons.FaArrowRight style={{ marginLeft: 5 }} /></Link>
                        </FadeComponent>
                    </Col>
                    <div className="divider" style={{ height: 2, width: '100%', margin: '15px 0 25px 0', background: theme === 'dark' ? '#087cad' : '#25A8E0' }}></div>
                </Row>
                <Col xs={24} sm={20} md={17} lg={12} style={{ margin: '20px 0 50px 0', fontSize: 15 }}>
                    <FadeComponent bottom>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed fugit vel placeat perspiciatis tenetur quam ab id, dolorem, impedit amet ex nihil laboriosam pariatur expedita, obcaecati quisquam magni consectetur beatae.</p>
                    </FadeComponent>
                </Col>
            </section>


        </div>
    )

};

export default withTranslation('contact')(Contact);
