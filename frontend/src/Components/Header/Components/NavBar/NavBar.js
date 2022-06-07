import { Avatar, Button, Col, Drawer, Popover, Row } from 'antd'
import React, { useContext } from 'react'
import { useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import './NavBar.css'
import NavbarTable from './NavBar.data'
import Logo from './../../../../File/images/Logo.svg'
import { FaBars } from 'react-icons/fa'
import { useEffect } from 'react'
import NavBarMobile from '../NavBarMobile/NavBarMobile'
import { ThemeContext } from '../../../Shared/Context/ThemeContext/ThemeContext'
import HeaderPopover from '../HeaderPopover/HeaderPopover'
import { AdminContext } from '../../../Shared/Context/AdminContext/AdminContext'
import axios from "axios";



const NavBar = ({t}) => {

    //Is it current visitor a admin

    const isAdmin = useContext(AdminContext)

    //Vérification si le dossier des cv sur le serveur est vide ou pas , si non on affiche un bouton pour supprimer les fichiers de ce dossier
    const [canDeleteCVFolder, setCanDeleteCVFolder] = useState(false)

    const token = sessionStorage.getItem('token');


    useEffect(async () => {
        console.log('admin',isAdmin,token)
        if (isAdmin && token) {

            const { data } = await axios.get('http://localhost:5000/'+'verify-cv', {
                headers: {
                    token: token
                }
            })
            if (data) {
                setCanDeleteCVFolder(true)
            }
        }
    })

        // Supprimer les fichiers dans le dossier cv sur le serveur

        const deleteCVFolder = async (e) => {
        e.preventDefault();
        if (token && isAdmin) {
            const res = await fetch('http://localhost:5000/'+'cv', {
                method: 'delete',
                headers: {
                    token: token
                }
            })

            const data = await res.json();
            if (data) {
                window.scrollTo(0, 0)
                window.location.reload()
            }
        }

    }

    //Allons-nous fixer le navbar du header ou pas ?

    const [fixedNavbar, setFixedNavbar] = useState(false)

    window.onscroll = (e) => {
        setFixedNavbar(() => window.scrollY > 65)
    }


    //Etat permettant de savoir si nous sommes sur mobile ou pas 
    const [mobile, setMobile] = useState(false);

    //Etat pour commander le sidebar fixé du header sur mobile
    const [visible, setVisible] = useState(false);


    /* Faisons des modifications lorsque nous sommes sur un écran mobile */

    window.onresize = () => {
        console.log('resize')
        if (window.innerWidth >= 780) {
            setVisible(false)
        }
        if (window.innerWidth <= 300) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }

    // Visiteur est un admin ?

    const { theme } = useContext(ThemeContext)

    //Ouvrir et Fermer le menu sur mobile

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    //fonction de déconnection de l'admin

    const logout = (e) => {
        e.preventDefault();
        sessionStorage.removeItem('token');
        window.location.reload()
    }

    return (
        <Row className={'header-navbar ' + (fixedNavbar ? ' fixed-top header-glass ' : '')} justify='space-between' id='header-navbar'>
            <Col span={4}>
                <Link to='/'>
                    <img src={Logo} alt='Logo de Atoopro' width={70} />
                </Link>
            </Col>
            <Col span={16} className='nav-links'>
                <Row justify='center' className='header-links'>
                    {
                        NavbarTable.map((element, i) => {
                            const Component = element.content
                            return <HeaderPopover key={element.id} Component={Component} elmt={element} />
                        })
                    }
                </Row>
            </Col>

            {/*
                si l'utilisateur est un administratuer , nous changeons le bouton obtenir un devis
            */}
            <Col span={4} className='nav-links-devis'>
                {
                    isAdmin ? <div className="admin-avatar">
                        <Popover style={{width:'10px !important'}} placement="bottom" content={
                            <div >
                                {canDeleteCVFolder && <Button type='link' onClick={deleteCVFolder}>Supprimer les cv</Button>}
                                <Button type='link' onClick={logout}>Se déconnecter</Button>
                            </div>} trigger="click">
                            <Avatar size={40} style={{ color: '#06152dd3', backgroundColor: '#8ac2dc', fontWeight: 'bold', cursor: 'pointer' }}>A</Avatar>
                        </Popover>
                    </div> : <a href='/contactez-nous?option=devis' type='primary' className='btn-link-primary' style={{ borderRadius: '40px', height: '40px' }} /*onClick={()=> window.location.href = '/contactez-nous?option=devis'}*/>{t('button')}</a>
                }
            </Col>
            <div className='mobile-navbar'>
                <div className="bars" onClick={showDrawer}>
                    <FaBars className='fa-bars' />
                </div>
                <Drawer width={mobile ? '100%' : 300} headerStyle={{ background: theme === 'dark' && '#1A202C', color: theme === 'dark' && '#f0e8f6d0 !important' }} bodyStyle={
                    {
                        background: theme === 'dark' && '#1A202C',
                        color: theme === 'dark' && 'red'
                    }
                } className='menu-mobile' title="" placement="right" onClose={onClose} visible={visible}>
                    <NavBarMobile t={t} setVisible={setVisible} logout={logout} isAdmin={isAdmin} deleteCVFolder={deleteCVFolder} canDeleteCVFolder={canDeleteCVFolder} />
                </Drawer>
            </div>

        </Row>
    )
}

export default NavBar
