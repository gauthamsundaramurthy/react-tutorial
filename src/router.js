import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TodoContainer from './redux/container'

function UIRoutes () {
    return (
        <Router>
            <Switch>
                <Route path="/"> <TodoContainer /> </Route>
            </Switch>
        </Router>
    )
}

export default UIRoutes;