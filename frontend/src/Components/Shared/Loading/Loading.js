import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext/ThemeContext'
import './Loading.css'

const Loading = () => {

    const { theme } = useContext(ThemeContext)

  return (
    <ul className={"loading "+(theme === 'dark' ? 'loading-dark' : '')}>
        <li className="loading-child"></li>
        <li className="loading-child"></li>
        <li className="loading-child"></li>
    </ul>
  )
}

export default Loading