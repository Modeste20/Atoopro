import { Col, Dropdown, Menu, Popover, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import Flags from 'country-flag-icons/react/3x2'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import NavBar from './Components/NavBar/NavBar'
import {ReactComponent as AnyDesk} from './../../File/images/AnyDesk/anydesk.svg'
import {ReactComponent as AnyDeskDark} from './../../File/images/AnyDesk/anydesk-dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext'



const Meenu = ({lang,setLang,setVisible}) => {


    // Function to change language

    const changeLanguage = ({domEvent}, status) => {
        domEvent.preventDefault();
        setLang(status)
    }

    const onClick = (e,state) => {
        changeLanguage(e,state);
        setVisible(false)
    }

    return (
        <Menu>
            <Menu.Item key={'france'} onClick={(e) => onClick(e,'fr')} className={lang === 'fr' && 'active-menu'}>
                <a href='#' className='flag-link' style={{display:'flex',alignItems:'center'}}>
                    <Flags.FR  title={'Français'} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                    <span style={{ paddingLeft: 8 }}>Français</span>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={'anglais'} onClick={(e) => onClick(e,'en')}  className={lang === 'en' && 'active-menu'}>
                <a href='#' className='flag-link' style={{display:'flex',alignItems:'center'}}>
                    <Flags.GB  title={'Anglais'} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                    <span style={{ paddingLeft: 8 }}>Anglais</span>
                </a>
            </Menu.Item>
        </Menu>
    )
}



const Header = () => {

    //choose Language
    const [lang, setLang] = useState('fr')

    const {pathname} = useLocation()

    const [className,setClassName] = useState('')
    const [colorLangLink,setColorLangLink] = useState('')

    const [visible,setVisible] = useState(false)

    const onVisibleChange = (visible) => {
        setVisible(visible)
    }

    const {theme} = useContext(ThemeContext)

    /*useEffect(() => {
        setClassName(() => ['/','/atoopro'].indexOf(pathname) !==-1 ? 'header--white' : '')
        setColorLangLink(() => ['/','/atoopro'].indexOf(pathname) !== -1 ? '#d2d7da' : '' )
    },[pathname])*/

    return (
        <header className={'header '+ className} id='header'>

            <div className='pre-header'>
                <div className='download-any'>
                    <a href='https://download.anydesk.com/AnyDesk.exe' title='Télécharger Anydesk'>
                    {
                        theme === 'light' ? <AnyDesk  /> : <AnyDeskDark />
                    }
                    </a>
                </div>
                <div className='change-langue'>
                    <Popover placement="bottom" visible={visible} onVisibleChange={onVisibleChange} content={<Meenu setVisible={setVisible} lang={lang} setLang={setLang} />}>
                    {
                            lang === 'en' ? <span  className='pb-2' style={{cursor:'pointer',display:'flex',alignItems:'center'}}>
                                <Flags.GB title={'Anglais'} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                                <span style={{ paddingLeft: 8,color: colorLangLink}}>Anglais</span>
                            </span> : <span className='pb-2' style={{cursor:'pointer',display:'flex',alignItems:'center'}}>
                                <Flags.FR title={'Français'} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                                <span style={{ paddingLeft: 8,color:colorLangLink}}>Français</span>
                            </span>
                    }
                    </Popover>
                </div>
            </div>
            <NavBar />
        </header>
    )
}

export default Header
