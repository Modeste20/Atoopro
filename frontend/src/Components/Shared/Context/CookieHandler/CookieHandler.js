import React, { createContext, useEffect, useState } from 'react'

// Un context permettant de savoir si l'utilisateur a refusé les cookies ou pas

export const CookieHandlerContext = createContext(null)

export const CookieHandler = ({children}) => {

    const [refuseCookie,setRefuseCookie] = useState(null)

    useEffect(() => {
        const cookie = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookie='))
            ?.split('=')[1];

        setRefuseCookie(() => {
            if(cookie){
                if(cookie === "no"){
                    //Refus des cookies par le visiteur
                    return true
                } else{
                    if(cookie === "okay"){
                    //Acc deptation des cookies par le visiteur
                        return false
                    }
                }
            } else{
                return null
            }
        })
    })

  return (
    <CookieHandlerContext.Provider value={refuseCookie}>
        {
            children
        }
    </CookieHandlerContext.Provider>
  )
}

export default CookieHandler