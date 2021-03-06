import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Offres from '../../Carrieres/Offres/Offres'
import Page404 from '../../Page404/Page404'
import Stages from './../../Carrieres/Stages/Stages'

const Carrieres = () => {

    const {path} = useRouteMatch()
    
  return (
    <Switch>

        {
            /* Nos métiers */
        }

            <Route exact path={path}>
                <Offres />
            </Route>

            <Route path={path+'/nos-metiers'}>
                <Offres />
            </Route>

        {
            /* Stages et Alternances */
        }

            <Route path={path+'/stages-et-alternances'}>
                <Stages />
            </Route>

        {
            /* Page 404 */
        }
            <Route path='*'>
                <Page404 />
            </Route>
    </Switch>
  )
}

export default Carrieres