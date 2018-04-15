// webpack asset imports
import '../fonts/montserrat.css';
import '../fonts/lato.css';
import '../css/style.css';
// js imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {routeHandler} from './constants';

ReactDOM.render(routeHandler.generateRoutes(), document.getElementById("app-main"));