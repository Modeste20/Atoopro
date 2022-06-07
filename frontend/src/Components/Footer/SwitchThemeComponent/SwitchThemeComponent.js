import React from 'react'
import { useContext } from 'react'
import * as  FaIcons from 'react-icons/fa'
import { LangContext } from '../../Shared/Context/LangContext/LangContext'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext'
import './switch.css'

const title = (lang,theme) =>{
    if(lang === 'en'){
        return theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"
    } else{
        return theme === 'dark' ? "Passez en mode claire" : "passez en mode sombre"
    }
}

const SwitchThemeComponent = () => {

    const { theme, useTheme } = useContext(ThemeContext)

    const {lang} = useContext(LangContext)

    

    return (
        <div title={title(lang,theme)} className={'switch-theme ' + (theme === 'dark' ? 'switch-dark' : '')} onClick={() => useTheme()}>
            <div className="circle">
                <FaIcons.FaSun />
            </div>
            <div className="circle">
                <FaIcons.FaMoon />
            </div>
        </div>
    )
}

export default SwitchThemeComponent
