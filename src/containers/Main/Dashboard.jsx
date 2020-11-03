import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Nav from './Nav';
import About from './About';

function Dashboard(props) {
    return(
        <Router>
            <div className="dashboard">
                <Nav />
            </div>
            <Switch>
                <Route exact path="/dash">
                    <Dashboard />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>
    )
}

export default Dashboard;