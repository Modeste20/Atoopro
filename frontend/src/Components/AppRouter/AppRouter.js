import React, { useContext } from 'react'
import {Route, Switch} from 'react-router-dom'
import AtooproEntreprise from '../AtooproEntreprise/AtooproEntreprise'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Carrieres from './Carrieres/Carrieres'
import Services from './Services/Services'
import Page404 from './../Page404/Page404'
import ConnexionAdmin from '../ConnexionAdmin/ConnexionAdmin'
import {AdminContext} from './../Shared/Context/AdminContext/AdminContext'
import Admin from '../Admin/Admin'
import { ContentContext } from '../Shared/Context/ContentContext/ContentContext'
import { Alert } from 'antd'
import { LangContext } from '../Shared/Context/LangContext/LangContext'

const AppRouter = () => {

    //Savoir si le visiteur courant est un administrateur

    const isAdmin = useContext(AdminContext)

    //Get Page Content

    const pageData = useContext(ContentContext)

    const {lang} = useContext(LangContext)

    console.log('isadmin',isAdmin)
    /*
        Si la récupération du contenu de page a échoué , on affiche un message d'alerte
    */

    console.log('page',pageData)

    if(pageData === null){
        return (
          <div className="alert-danger">
            <Alert message={lang === 'fr' ? "une erreure s'est produite lors du chargement du contenu de la page" : "Error find"} type="error" />
          </div>
        )
    }
    return (
        <Switch>
            {/* Page d'accueil */}
            <Route path='/' exact>
                <Home />
            </Route>

            {/* Page de contact */}
            <Route path='/contactez-nous'>
                <Contact />
            </Route>


            {/* Page des services */}

            <Route path='/services'>
                <Services />
            </Route>


            {/* Page de carrières */}

            <Route path='/carrieres'>
                <Carrieres />
            </Route>


            {/* Page de l'entreprise*/}

            <Route path='/qui-sommes-nous'>
                <AtooproEntreprise />
            </Route>


            {/* Page de l'administrateur (si le visiteur courant l'est) */}

            <Route path='/admin'>
                {
                    isAdmin ? <Admin /> : <ConnexionAdmin />
                }
            </Route>


            {/* Page 404 */}

            <Route path='/404'>
                <Page404 />
            </Route>
        </Switch>
    )
}

export default AppRouter
