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

const AppRouter = () => {

    //Savoir si le visiteur courant est un administrateur

    const isAdmin = useContext(AdminContext)

    console.log('isadmin',isAdmin)

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

            <Route path='*'>
                <Page404 />
            </Route>
        </Switch>
    )
}

export default AppRouter
