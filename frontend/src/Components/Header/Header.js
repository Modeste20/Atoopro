import { Col, Dropdown, Menu, Popover, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import Flags from 'country-flag-icons/react/3x2'
import './Header.css'
import NavBar from './Components/NavBar/NavBar'
import {ReactComponent as AnyDesk} from './../../File/images/AnyDesk/anydesk.svg'
import {ReactComponent as AnyDeskDark} from './../../File/images/AnyDesk/anydesk-dark.svg'
import { useContext } from 'react'
import { ThemeContext } from '../Shared/Context/ThemeContext/ThemeContext'
import i18n from './../../i18n'
import { LangContext } from '../Shared/Context/LangContext/LangContext'
import {withTranslation} from 'react-i18next'
import { useLocation } from 'react-router-dom'


const Meenu = ({lang,setLang,t}) => {

    console.log('lang',lang)

    const {search} = useLocation()

    // Function to change language

    const changeLanguage = (e,language) => {
        e.domEvent.preventDefault()
        if(lang !== language){
            i18n.changeLanguage(language)
            setLang(language)
            if(navigator.cookieEnabled && window.localStorage){
                localStorage.setItem('lang',language)
            }
        }
    }


   

    return (
        <Menu>
            <Menu.Item key={'france'} onClick={(e) => changeLanguage(e,'fr')} className={lang === 'fr' ? 'active-menu' : ''}>
                <a href='#' className='flag-link' style={{display:'flex',alignItems:'center'}}>
                    <Flags.FR  title={t('lang.french')} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                    <span style={{ paddingLeft: 8 }}>{t('lang.french')}</span>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key={'anglais'} onClick={(e) => changeLanguage(e,'en')}  className={lang === 'en' ? 'active-menu' : ''}>
                <a href='#' className='flag-link' style={{display:'flex',alignItems:'center'}}>
                    <Flags.GB  title={t('lang.english')} className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                    <span style={{ paddingLeft: 8 }}>{t('lang.english')}</span>
                </a>
            </Menu.Item>
        </Menu>
    )
}



const Header = ({t}) => {


    const {lang,setLang} = useContext(LangContext)


    const [className,setClassName] = useState('')
    const [colorLangLink,setColorLangLink] = useState('')

    const [visible,setVisible] = useState(false)

    const onVisibleChange = (visible) => {
        setVisible(visible)
    }

    const {theme} = useContext(ThemeContext)

    /*useEffect(() => {
        setClassName(() => ['/','/atoopro'].indexOf(pathname) !==-1 ? 'header--white' : '')
        setColorLangLink(() => ['/','/atoopro'].indexOf(pathname) !== -1 ? '#f0e8f6d0' : '' )
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
                    <Popover placement="bottom" visible={visible} onVisibleChange={onVisibleChange} content={<Meenu lang={lang} t={t} setLang={setLang} />}>
                    {
                            lang === 'en' ? <span title={t('lang.english')}  className='pb-2' style={{cursor:'pointer',display:'flex',alignItems:'center'}}>
                                <Flags.GB  className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                                <span style={{ paddingLeft: 8,color: colorLangLink}}>{t('lang.english')}</span>
                            </span> : <span  title={t('lang.french')} className='pb-2' style={{cursor:'pointer',display:'flex',alignItems:'center'}}>
                                <Flags.FR className="flag-header" style={{ width: '30px',borderRadius:3 }} />
                                <span style={{ paddingLeft: 8,color:colorLangLink}}>{t('lang.french')}</span>
                            </span>
                    }
                    </Popover>
                </div>
            </div>
            <NavBar t={t} />
        </header>
    )
}

export default withTranslation('header')(Header)
