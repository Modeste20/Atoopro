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

    const isAdmin = useContext(AdminContext)

    console.log('isadmin',isAdmin)

    return (
        <Switch>
            <Route path='/' exact>
                <Home />
            </Route>

            <Route path='/contactez-nous'>
                <Contact />
            </Route>

            <Route path='/services'>
                <Services />
            </Route>

            <Route path='/carrieres'>
                <Carrieres />
            </Route>

            <Route path='/qui-sommes-nous'>
                <AtooproEntreprise />
            </Route>

            <Route path='/admin'>
                {
                    isAdmin ? <Admin /> : <ConnexionAdmin />
                }
                
            </Route>

            <Route path='*'>
                <Page404 />
            </Route>
        </Switch>
    )
}

export default AppRouter
