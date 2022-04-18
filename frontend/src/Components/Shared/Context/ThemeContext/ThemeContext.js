import React,{ createContext, useContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const useTheme = () => {
    const [theme,setTheme] = useState('light')

    useEffect(() => {
        const storageTheme = localStorage.getItem('theme');
        if(storageTheme){
            setTheme(storageTheme)
        } else{
            localStorage.setItem('theme','light')
        }
    })

    const changeTheme = () => {
        setTheme(c =>{
            if(c==='light'){
                localStorage.setItem('theme','dark')
                return 'dark'
            } else{
                localStorage.setItem('theme','light')
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


