// webpack asset imports
import '../fonts/montserrat.css';
import '../fonts/lato.css';
import '../css/style.css';
// js imports
import HomeContainer from './container/home';
import AboutContainer from './container/about';
import ProjectsContainer from './container/projects';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter, Redirect} from 'react-router-dom';



ReactDOM.render(<BrowserRouter>
    <Switch>
        <Redirect exact={true} from="/" to="/home" />
        <Route path="/home" component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/projects" component={ProjectsContainer} />
    </Switch>
</BrowserRouter>, document.getElementById("app-main"));