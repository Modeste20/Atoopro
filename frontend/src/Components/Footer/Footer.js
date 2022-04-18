import React, { useEffect, useState } from 'react'
import { Col, Divider, Menu, Row } from 'antd'
import './Footer.css'
import { Link } from 'react-router-dom'
import SwitchThemeComponent from './SwitchThemeComponent/SwitchThemeComponent'
import * as FaIcons from 'react-icons/fa'
import { AtooproLinks, CarriereLinks, ServiceLinks } from '../Header/Components/NavBar/NavBar.data'

function Footer(props) {

    const [date, setDate] = useState(new Date)

    const [visible,setVisible] = useState(false)

    window.addEventListener('scroll',() => {
        setVisible(() => window.scrollY >= 200)
    })

    return (
        <footer className="footer" id="footer">
            <div className="footer-div">
                <div className='footer-row'>
                    <div className="atoopro-footer atoopro-foot">
                        <div>
                            <h2>ATOOPRO</h2>
                            <p style={{ paddingTop: 14 }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque atque dolores adipisci velit fugit distinctio odit est ut architecto deserunt consectetur quasi, voluptatem.
                            </p>
                            <Link to='/qui-sommes-nous' className='btn-footer-more link'>En savoir plus <FaIcons.FaArrowRight /></Link>
                        </div>
                        <div className="footer-contact-link">
                            <Menu className='footer-contact-menu'>
                                <Menu.Item key={'map-link'}>
                                    <Link to='/' title={'21 Revolution StreetParis France'} className='icn-link'>
                                        <span className='icn'>
                                            <FaIcons.FaMapMarked className='map-icn' />
                                        </span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key={'tel'}>
                                    <Link to='tel:0791107290' title={'+1 555 123456'} className='icn-link'>
                                        <span className="icn">
                                            <FaIcons.FaPhoneAlt className='phone-icn' />
                                        </span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key={'mail'} >
                                    <Link to='/contactez-nous' className='icn-link'>
                                        <span className='icn'>
                                            <FaIcons.FaEnvelope className='mail-icn' />
                                        </span>
                                    </Link>
                                </Menu.Item>

                                <Menu.Item key={'linkedin'} >
                                    <a href='http://www.linkedin.com' title={"Linkedin"} className='icn-link'>
                                        <span className='icn'>
                                            <FaIcons.FaLinkedin className='linkedin-icn' />
                                        </span>
                                    </a>
                                </Menu.Item>


                            </Menu>
                        </div>
                    </div>

                    <div className="atoopro-footer">
                        <div>
                            <h2>Notre société</h2>
                            <AtooproLinks footer />
                        </div>
                    </div>

                    <div className="atoopro-footer">
                        <div>
                            <h2>Nos services</h2>
                            <ServiceLinks footer />
                        </div>

                    </div>

                    <div className="atoopro-footer">
                        <div>
                            <h2>Carriéres</h2>
                            <CarriereLinks footer />
                        </div>

                    </div>

                </div>
            </div>
            <div className="copyright-and-others">

                <div className="links-footer-atoopro">
                    <ul>
                        <li>
                            <Link to={'/'}>Mentions légales</Link>
                        </li>

                        <li>
                            <Link to={'/'}>Politiques de confidentialités</Link>
                        </li>

                        <li>
                            <Link to={'/'}>Conditions d'utilisation</Link>
                        </li>
                        <li>
                            <SwitchThemeComponent />
                            <div className={"top "+(visible ? 'visible' : '')} title='Retourner en haut' onClick={() => window.scrollTo(0,0)}>
                                <FaIcons.FaArrowUp />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="copyright-atoopro" style={{ paddingTop: 10 }}>
                    &copy;<strong><span style={{fontFamily:'Lato !important',fontSize:15}} className='year'> {date.getFullYear()}</span> ATOO PRO </strong> Tous droits réservés
                </div>
            </div>
        </footer>
    )
}


export default Footer

