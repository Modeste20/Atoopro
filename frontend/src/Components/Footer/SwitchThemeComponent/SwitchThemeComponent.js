import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import * as  FaIcons from 'react-icons/fa'
import { ThemeContext } from '../../Shared/Context/ThemeContext/ThemeContext'
import './switch.css'

const SwitchThemeComponent = () => {

    const [change, setChange] = useState(0)

    const { theme, useTheme } = useContext(ThemeContext)

    return (
        <div title={theme === 'dark' ? "Passez en mode claire" : "passez en mode sombre"} className={'switch-theme ' + (theme === 'dark' ? 'switch-dark' : '')} onClick={() => useTheme()}>
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
