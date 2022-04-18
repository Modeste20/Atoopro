import ReactDOM from "react-dom"
import React, { useEffect } from "react"
import 'antd/dist/antd.css'
import 'antd/dist/antd.variable.min.css';
import './style/index.css'
import { BrowserRouter as Router } from "react-router-dom";
import Atoopro from "./Atoopro/Atoopro";
import ErrorBoundary from "./Components/Shared/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "./Components/Shared/Context/ThemeContext/ThemeContext";
import { AdminContext, AdminProvider } from "./Components/Shared/Context/AdminContext/AdminContext";
//import { ParallaxProvider } from "react-scroll-parallax";
import axios from 'axios'
import { useContext } from "react";




const App = () => {


    useEffect(async() => {
        console.log('app')
        const {data} = await axios.get('http://ip-api.com/json/?fields=query,country')

        if(data && data.country && data.query){
            const res = axios.post('http://localhost:5000/visitor',{
                ip:data.query,
                country:data.country
            })
            console.log(res.data)
        }

    },[])


    return (
        <AdminProvider>
            <ThemeProvider>
                <Router basename="/">
                    <Atoopro />
                </Router>
            </ThemeProvider>
        </AdminProvider>



    )
}

ReactDOM.render(<ErrorBoundary><App /></ErrorBoundary>, document.getElementById('atoopro'))