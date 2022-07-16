import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import i18n from '../../../../i18n'
import { CookieHandlerContext } from '../CookieHandler/CookieHandler'


export const LangContext = React.createContext({
    lang:'fr',
    setLang:() => {}
})

export const LangProvider = ({children}) => {

    //Accept cookie or reject

    const refuseCookie = useContext(CookieHandlerContext)

    const langue = refuseCookie === false &&  navigator.cookieEnabled && window.localStorage ? localStorage.getItem('lang') : i18n.language
    const [lang,setLang] = useState(i18n.language)

    useEffect(() => {
        if(langue && (langue === 'fr' || langue === 'en')){
            setLang(langue)
            i18n.changeLanguage(langue)
        }
    })

    return (
        <LangContext.Provider value={{lang,setLang}}>
            {
                children
            }
        </LangContext.Provider>
    )
}