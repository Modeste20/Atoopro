import React, { useEffect, useState } from 'react'
import { Col, Divider, Menu, Row } from 'antd'
import './Footer.css'
import { Link } from 'react-router-dom'
import SwitchThemeComponent from './SwitchThemeComponent/SwitchThemeComponent'
import * as FaIcons from 'react-icons/fa'
import { AtooproLinks, CarriereLinks, ServiceLinks } from '../Header/Components/NavBar/NavBar.data'
import { withTranslation } from 'react-i18next'

function Footer({t}) {

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
                            <h3>ATOOPRO</h3>
                            <p style={{ paddingTop: 14 }}>
                            {t('atoopro.paragraphe')}
                            </p>
                            <Link to='/qui-sommes-nous' className='btn-footer-more link'>{t('atoopro.link')} <FaIcons.FaArrowRight /></Link>
                        </div>
                        <div className="footer-contact-link">
                            <Menu className='footer-contact-menu'>
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
                            <h3>{t('atoopro_label')}</h3>
                            <AtooproLinks footer />
                        </div>
                    </div>

                    <div className="atoopro-footer">
                        <div>
                            <h3>{t('services_label')}</h3>
                            <ServiceLinks footer />
                        </div>

                    </div>

                    <div className="atoopro-footer">
                        <div>
                            <h3>{t('carrieres_label')}</h3>
                            <CarriereLinks footer />
                        </div>

                    </div>

                </div>
            </div>
            <div className="copyright-and-others">

                <div className="links-footer-atoopro">
                    <ul>
                        <li>
                            <Link to={'/'}>{t('bottom.legales')}</Link>
                        </li>

                        <li>
                            <Link to={'/'}>{t('bottom.confidentiality')}</Link>
                        </li>

                        <li>
                            <Link to={'/'}>{t('bottom.conditions')}</Link>
                        </li>
                        <li>
                            <SwitchThemeComponent />
                            <div className={"top "+(visible ? 'visible' : '')} title={t('title.top')} onClick={() => window.scrollTo(0,0)}>
                                <FaIcons.FaArrowUp />
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="copyright-atoopro" style={{ paddingTop: 10 }}>
                    &copy;<strong><span style={{fontFamily:'Lato !important',fontSize:15}} className='year'> {date.getFullYear()}</span> ATOO PRO </strong> {t('bottom.copyright')}
                </div>
            </div>
        </footer>
    )
}


export default withTranslation('footer')(Footer)

