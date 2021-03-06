import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css';
import './style/index.css'
import { BrowserRouter as Router } from "react-router-dom";
import Atoopro from "./Atoopro/Atoopro";
import ErrorBoundary from "./Components/Shared/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./Components/Shared/Context/ThemeContext/ThemeContext";
import { AdminProvider } from "./Components/Shared/Context/AdminContext/AdminContext";
import { ParallaxProvider } from "react-scroll-parallax";
import axios from 'axios'
import { Suspense } from "react";
import { LangProvider } from "./Components/Shared/Context/LangContext/LangContext";
import Loading from "./Components/Shared/Loading/Loading";
import CookieHandler from "./Components/Shared/Context/CookieHandler/CookieHandler";
    

const App = () => {

    console.log('react env',process.env.STRAPI_APP_URL)

    useEffect(async () => {

        // requête pour reçevoir l'adresse ip du présent visiteur

        const { data } = await axios.get('http://ip-api.com/json/?fields=query,country')

        if (data && data.country && data.query) {
            const res = axios.post('http://localhost:5000/' + 'visitor', {
                ip: data.query,
                country: data.country
            })
            console.log(res.data)
        }

    }, [])

    //Contexte de Langue LangProvider
    //Contexte de Admin 
    //Contexte de thème


    return (
        <CookieHandler>
            <LangProvider>
                <AdminProvider>
                    <ParallaxProvider>
                        <ThemeProvider>
                            <Router>
                                <Atoopro />
                            </Router>
                        </ThemeProvider>
                    </ParallaxProvider>
                </AdminProvider>
            </LangProvider>
        </CookieHandler>

    )
}

ReactDOM.render(<ErrorBoundary><Suspense fallback={<Loading />}><App /></Suspense></ErrorBoundary>, document.getElementById('atoopro'))