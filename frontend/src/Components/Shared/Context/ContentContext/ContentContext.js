import React,{ createContext ,useEffect , useState } from "react";
import { useContext } from "react";
import getContent from "../../fetchContent/fetchContent";
import Loading from "../../Loading/Loading";
import { LangContext } from "../LangContext/LangContext";


export const ContentContext = createContext(null);


//Récupérer les chaînes de caractère selon la page courante en vue d'envoyer des requêtes au
//backend strapi url sous la forme de 'base-api-url'+/api/+'string selon la page'

const getUrl = (pathname) => {
    if(pathname==='/'){
        return 'home'
    }
    if(['/qui-sommes-nous','/qui-sommes-nous/'].includes(pathname)){
        return 'atoopro'
    }
    if(['/contactez-nous','/contactez-nous/'].includes(pathname)){
        return 'contact'
    }
    if(['/carrieres/nos-metiers','/carrieres/nos-metiers/'].includes(pathname)){
        return 'metier'
    }
    if(['/carrieres/stages-et-alternances','/carrieres/stages-et-alternances/'].includes(pathname)){
        return 'stage'
    } 
    if(['/services/hebergement','/services/hebergement/'].includes(pathname) || ['/services','/services/'].includes(pathname)){
        return 'hebergement'
    }
    if(['/services/communications-unifiees','/services/communications-unifiees/'].includes(pathname) || ['/services','/services/'].includes(pathname)){
        return 'communication'
    }
    if(['/services/developpement','/services/developpement/'].includes(pathname) || ['/services','/services/'].includes(pathname)){
        return 'developpement'
    }
    if(['/services/assistance','/services/assistance/'].includes(pathname) || ['/services','/services/'].includes(pathname)){
        return 'assistance'
    } else{

        //Page inexistante 404

        return ''
    }
}

const content = async (pathname,lang) => {
    const url = getUrl(pathname)
    if(url){
        const data = await getContent(process.env.STRAPI_APP_URL+'/api/'+url+(lang === 'en' ? '?locale=en' : '' ))
        return data
    } else{

        // if !url ; alors il s'agit de la page 404

        return null
    }

}

export const ContentProvider = ({children}) => {

    const {pathname} = window.location
    const {lang} = useContext(LangContext)


    const [loading,setLoading] = useState(true);
    const [data,setData] = useState(null);

    


    useEffect(async() => {
        console.log('render')
            const contenu = await content(pathname,lang);
            if(contenu !== null){
                setData(contenu.data);
                setLoading(contenu.loading);
            } else{

                //contenu === null , on se trouve ainsi sur la page 404
                
                setData({})
                setLoading(false)
            }
            
    },[pathname,lang]) 

    useEffect(() => {
        console.log('data',data)
    },[pathname,lang])


    if(loading){
        return <Loading />
    } else{
        return (
            <ContentContext.Provider value={data}>
                {
                    children
                }
            </ContentContext.Provider>
        )
    }
}