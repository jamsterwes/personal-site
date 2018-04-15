import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class PageHeader extends Component {
    render() {
        return (<div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="nav-link-active" className="nav-link" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-link-active" className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="nav-link-active" className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text-strip">
                <h1 className="poppin-name text-center">{this.props.pageTitle}</h1>
            </div>
        </div>);
    }
}