import React from 'react';
import Home from "pages/Home";
import Dashoard from "pages/Dashoard";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/dashboard" >
                    <Dashoard />
                </Route>
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;
