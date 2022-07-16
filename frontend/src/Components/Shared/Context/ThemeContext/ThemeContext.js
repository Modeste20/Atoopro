import React,{ createContext, useContext, useEffect, useState } from "react";
import { CookieHandlerContext } from "../CookieHandler/CookieHandler";


export const ThemeContext = createContext();

const useTheme = () => {
    const [theme,setTheme] = useState('light')

    //Accept cookie or reject

    const refuseCookie = useContext(CookieHandlerContext)

    useEffect(() => {
        const storageTheme = (refuseCookie === false && navigator.cookieEnabled && window.localStorage) ? localStorage.getItem('theme') : 'light';
        if(storageTheme){
            setTheme(storageTheme)
        } else{
            if(refuseCookie === false && navigator.cookieEnabled && window.localStorage){
                localStorage.setItem('theme','light')
            }
        }
    },[refuseCookie])

    const changeTheme = () => {
        setTheme(c =>{
            if(c==='light'){
                if(refuseCookie === false && navigator.cookieEnabled && window.localStorage){
                    localStorage.setItem('theme','dark')
                }
                return 'dark'
            } else{
                if(refuseCookie === false && navigator.cookieEnabled && window.localStorage){
                    localStorage.setItem('theme','light')
                }
                return 'light'
            }
        })
    }

    return [theme,changeTheme]
}

export const  ThemeProvider = ({children}) => {

    const [theme,changeTheme] = useTheme()

    const value = {theme,useTheme:changeTheme}

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}


