import { Menu } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import { NavHashLink } from 'react-router-hash-link'

// Liens du panneau notre société dans  le navbar du header


export const AtooproLinks = ({ footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? 'footer-societe' : "popover-atoopro"}>
            <Menu.Item key={'atoopro'} >
                <Link to='/qui-sommes-nous' className='popover-link' onClick={onClick}>Qui sommes-nous ?</Link>
            </Menu.Item>

            <Menu.Item key={'partenaires'} >
                <NavHashLink to='/#partenaires' className='popover-link' onClick={onClick}>Nos partenaires</NavHashLink>
            </Menu.Item>

            <Menu.Item key={'contact'} >
                <Link to='/contactez-nous' className='popover-link' onClick={onClick}>Contactez-nous</Link>
            </Menu.Item>
        </Menu>
    )
}


// Liens du panneau nos services dans  le navbar du header


export const ServiceLinks = ({ footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? "footer-service" : "popover-services"}>
            <Menu.Item key={'hebergement'} >
                <Link className='popover-link' to='/services/hebergement' onClick={onClick}>Hébergement</Link>
            </Menu.Item>

            <Menu.Item key={'assistance'} >
                <Link className='popover-link' to='/services/assistance' onClick={onClick}>Assistance</Link>
            </Menu.Item>

            <Menu.Item key={'developpement'} >
                <Link className='popover-link' to='/services/developpement' onClick={onClick}>Développement</Link>
            </Menu.Item>

            <Menu.Item key={'communications-unifiees'} >
                <Link className='popover-link' to='/services/communications-unifiees' onClick={onClick}>Communications unifiées</Link>
            </Menu.Item>

        </Menu>
    )
}

// Liens du panneau carrieres dans  le navbar du header


export const CarriereLinks = ({ footer = false, onClick = () => { } }) => {

    return (
        <Menu className={footer ? "footer-carrieres" : "popover-carrieres"}>

            <Menu.Item key={'emploi'} >
                <Link className='popover-link' to='/carrieres/nos-metiers' onClick={onClick}>Nos métiers</Link>
            </Menu.Item>

            <Menu.Item key={'stages'} >
                <Link className='popover-link' to='/carrieres/stages-et-alternances' onClick={onClick}>Stages et alternances</Link>
            </Menu.Item>



            {/*<Menu.Item key={'carrieres'} >
                <Link className='popover-link' to='/carrieres/votre-carriere' onClick={onClick}>Votre carrière</Link>
            </Menu.Item>*/}
        </Menu>
    )
}


const NavbarTable = [
    {
        label: 'Notre société',
        id: 'atoopro',
        content: ({ onClick }) => <AtooproLinks onClick={onClick} />,
    },
    {
        label: 'Nos services',
        id: 'services',
        content: ({ onClick }) => <ServiceLinks onClick={onClick} />,
    },
    {
        label: 'Carrières',
        id: 'carrieres',
        content: ({ onClick }) => <CarriereLinks onClick={onClick} />,
    },
]

export default NavbarTable