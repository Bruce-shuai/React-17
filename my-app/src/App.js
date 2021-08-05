import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './home';
import Detail from './detail';


const BasicRoute = () => (
    <HashRouter>

            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
    </HashRouter>
);export default BasicRoute;