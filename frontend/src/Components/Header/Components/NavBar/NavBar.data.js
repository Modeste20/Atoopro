import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import {withTranslation} from 'react-i18next'



// Liens du panneau notre société dans  le navbar du header


export const AtooproLinks = withTranslation('menu')(({ t, footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? 'footer-societe' : "popover-atoopro"}>
            <Menu.Item key={'atoopro'} >
                <Link to='/qui-sommes-nous' className='popover-link' onClick={onClick}>{t('atoopro.atoopro')}</Link>
            </Menu.Item>

            <Menu.Item key={'partenaires'} >
                <NavHashLink to='/#partenaires' className='popover-link' onClick={onClick}>{t('atoopro.partenaires')}</NavHashLink>
            </Menu.Item>

            <Menu.Item key={'contact'} >
                <Link to='/contactez-nous' className='popover-link' onClick={onClick}>{t('atoopro.contact')}</Link>
            </Menu.Item>
        </Menu>
    )
})


// Liens du panneau nos services dans  le navbar du header


export const ServiceLinks = withTranslation('menu')(({t, footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? "footer-service" : "popover-services"}>
            <Menu.Item key={'hebergement'} >
                <Link className='popover-link' to='/services/hebergement' onClick={onClick}>{t('services.hebergement')}</Link>
            </Menu.Item>

            <Menu.Item key={'assistance'} >
                <Link className='popover-link' to='/services/assistance' onClick={onClick}>{t('services.assistance')}</Link>
            </Menu.Item>

            <Menu.Item key={'developpement'} >
                <Link className='popover-link' to='/services/developpement' onClick={onClick}>{t('services.developpement')}</Link>
            </Menu.Item>

            <Menu.Item key={'communications-unifiees'} >
                <Link className='popover-link' to='/services/communications-unifiees' onClick={onClick}>{t('services.communications')}</Link>
            </Menu.Item>

        </Menu>
    )
})

// Liens du panneau carrieres dans  le navbar du header


export const CarriereLinks = withTranslation('menu')(({ t, footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? "footer-carrieres" : "popover-carrieres"}>

            <Menu.Item key={'emploi'} >
                <Link className='popover-link' to='/carrieres/nos-metiers' onClick={onClick}>{t('carrieres.metiers')}</Link>
            </Menu.Item>

            <Menu.Item key={'stages'} >
                <Link className='popover-link' to='/carrieres/stages-et-alternances' onClick={onClick}>{t('carrieres.stages')}</Link>
            </Menu.Item>
        </Menu>
    )
})


const NavbarTable = [
    {
        id: 'atoopro',
        content: ({ onClick }) => <AtooproLinks onClick={onClick} />,
    },
    {
        id: 'services',
        content: ({ onClick }) => <ServiceLinks onClick={onClick} />,
    },
    {
        id: 'carrieres',
        content: ({ onClick }) => <CarriereLinks onClick={onClick} />,
    },
]

export default NavbarTable