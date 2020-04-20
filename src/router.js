import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Basics from './basics/Basics'
import ErrorBoundaryDemo from './errorBoundary/ErrorBoundaryDemo'

function UIRoutes () {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <Basics /> </Route>
                <Route path="/error-boundary"> <ErrorBoundaryDemo /> </Route>
            </Switch>
        </Router>
    )
}

export default UIRoutes;