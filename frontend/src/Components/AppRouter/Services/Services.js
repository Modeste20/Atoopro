import React from 'react'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import Page404 from '../../Page404/Page404';
import Assistance from '../../Services/Assistance/Assistance';
import CommunicationService from '../../Services/Communication/Communication';
import DeveloppementService from '../../Services/Developpement/Developpement';
import Hebergement from '../../Services/Hebergement/Hebergement'

const Services = () => {
    const { path, url } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <Hebergement />
            </Route>
            <Route path={path + '/hebergement'}>
                <Hebergement />
            </Route>

            <Route path={path + '/assistance'}>
                <Assistance />
            </Route>

            <Route path={path + '/developpement'}>
                <DeveloppementService />
            </Route>

            <Route path={path + '/communications-unifiees'}>
                <CommunicationService />
            </Route>

            <Route path='*'>
                <Page404 />
            </Route>
        </Switch>
    )
}

export default Services