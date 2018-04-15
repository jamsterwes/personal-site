import * as React from 'react';
import {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { routeHandler } from '../constants';

export default class PageHeader extends Component<any, any> {
    private capitalize(text: string): string {
        var output: string = "";
        output += text.toUpperCase()[0];
        output += text.toLowerCase().substr(1);
        return output;
    }
    render(): JSX.Element {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {routeHandler.listRoutes().map((route: string, i: number) => {
                            return (<li key={i} className="nav-item">
                                <NavLink activeClassName="nav-link-active" className="nav-link" to={"/" + route}>{this.capitalize(route)}</NavLink>
                            </li>);
                        })}
                    </ul>
                </div>
            </nav>
            <div className="text-strip">
                <h1 className="poppin-name text-center">{this.props.pageTitle}</h1>
            </div>
        </div>);
    }
}