import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import {BrowserRouter, Redirect} from 'react-router-dom';

export interface RouteInfo {
    path: string,
    component: React.ComponentClass
}

export class RouteHandler {
    routes: RouteInfo[];
    home: string;
    constructor(homePath: string, routes: RouteInfo[]) {
        this.routes = routes;
        this.home = homePath;
    }
    generateRoutes(): JSX.Element {
        return (<BrowserRouter>
            <Switch>
                <Redirect exact={true} from="/" to={this.home} />
                {this.routes.map((routeInfo: RouteInfo, i: number) => {
                    return <Route key={i} path={routeInfo.path} component={routeInfo.component} />;
                })}
            </Switch>
        </BrowserRouter>);
    }
    listRoutes(): string[] {
        return this.routes.map(x => x.path.substr(1));
    }
}