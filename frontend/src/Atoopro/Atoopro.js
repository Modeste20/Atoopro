import React, { useContext, useEffect } from 'react'
import AppRouter from '../Components/AppRouter/AppRouter'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import { ThemeContext } from '../Components/Shared/Context/ThemeContext/ThemeContext'
import { ConfigProvider} from "antd";
import {useLocation } from 'react-router-dom'
import { ContentProvider } from '../Components/Shared/Context/ContentContext/ContentContext'
import Loading from '../Components/Shared/Loading/Loading'


const Atoopro = () => {

    //Connaitre le thème courant

    const themeValue = useContext(ThemeContext);
   

    //Configuration antd : changer la couleur principale selon le thème actuel

    ConfigProvider.config({
        theme: {
            primaryColor: themeValue.theme === 'light' ? '#25A8E0' : '#1a52bb'
        },
    
    });

    //Ajout d'un classe body-dark lorsque le thème est sombre
    //Permettant de styliser les composants plus simplement 

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
            <ContentProvider>
                <AppRouter />
            </ContentProvider>
            </main>
            <Footer />
        </>
    )
}

export default Atoopro
