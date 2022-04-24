import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import i18n from '../../../../i18n'


export const LangContext = React.createContext({
    lang:'fr',
    setLang:() => {}
})

export const LangProvider = ({children}) => {
    const langue = localStorage.getItem('lang')
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