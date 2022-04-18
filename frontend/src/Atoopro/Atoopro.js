import React, { useContext, useEffect } from 'react'
import AppRouter from '../Components/AppRouter/AppRouter'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { ThemeContext } from '../Components/Shared/Context/ThemeContext/ThemeContext'
import { ConfigProvider} from "antd";
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from '../Components/Home/Home'
import Contact from '../Components/Contact/Contact'
import { AdminContext } from '../Components/Shared/Context/AdminContext/AdminContext'
import axios from 'axios'


const Atoopro = () => {

    

    const themeValue = useContext(ThemeContext);
   

    ConfigProvider.config({
        theme: {
            primaryColor: themeValue.theme === 'light' ? '#25A8E0' : '#1a52bb',
        },
    
    });

    useEffect(() => {
        if(themeValue.theme  === 'dark'){
            document.body.classList.add('body-dark')
        } else{
            if(document.body.classList.contains('body-dark')){
                document.body.classList.remove('body-dark')
            }
        }
    },[themeValue.theme])

    // Scroll to top when change page

    const {pathname} = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])


    return (
        <>
            <Header />
            <main className="main" id="main">
                <AppRouter />
            </main>
            <Footer />
        </>
    )
}

export default Atoopro
