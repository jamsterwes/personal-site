import * as React from 'react';
import {Component} from 'react';

export default class VisualTextCard extends Component<any, any> {
    render(): JSX.Element {
        return (<div className="row vertical-offset">
            <div className="col-sm-12">
                <img width="100%" src={this.props.src} />
            </div>
            <div className="col-sm-12">
                <div className="back-box">
                    <h2 className="poppin-name poppin-name--small text-center">{this.props.title}</h2>
                    <hr />
                    {this.props.content}
                </div>
            </div>
        </div>);
    }
}