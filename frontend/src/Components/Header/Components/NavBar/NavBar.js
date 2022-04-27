import { Button, Col, Drawer, Popover, Row } from 'antd'
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




const NavBar = () => {

    const [fixedNavbar, setFixedNavbar] = useState(false)

    window.onscroll = (e) => {
        setFixedNavbar(() => window.scrollY > 65)
    }

    const [visible, setVisible] = useState(false);
    const [mobile, setMobile] = useState(false);


    const history = useHistory()

    window.onresize = () => {
        console.log('resize')
        if(window.innerWidth>=780 ){
            setVisible(false)
        }
        if(window.innerWidth<=300 ){
            setMobile(true)
        } else{
            setMobile(false)
        }
    }

    console.log(mobile)

    const {theme} = useContext(ThemeContext)

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
      };

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

            <Col span={4} className='nav-links-devis'>
                <a href='/contactez-nous?option=devis' type='primary' className='btn-link-primary' style={{ borderRadius: '40px', height: '40px' }} /*onClick={()=> window.location.href = '/contactez-nous?option=devis'}*/>Obtenir un devis</a>
            </Col>
            <div className='mobile-navbar'>
                <div className="bars" onClick={showDrawer}>
                    <FaBars className='fa-bars' />
                </div>
                <Drawer width={mobile ? '100%' : 300}  headerStyle={{background:theme === 'dark' && '#1A202C',color:theme === 'dark' && '#f0e8f6d0 !important'}} bodyStyle={
                    {
                        background:theme === 'dark' && '#1A202C',
                        color:theme === 'dark' && 'red'
                    }
                } className='menu-mobile' title="" placement="right" onClose={onClose} visible={visible}>
                    <NavBarMobile setVisible={setVisible} />
                </Drawer>
            </div>

        </Row>
    )
}

export default NavBar
