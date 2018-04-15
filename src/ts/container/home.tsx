import * as React from 'react';
import {Component} from 'react';
import {infoContent} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class HomeContainer extends Component<any, any> {
    render() {
        return (<div>
            <PageHeader pageTitle="wes taylor" />
            <div className="container">
                <VisualTextCard src="public/img/familia.jpg" title="Hi, I'm Wes Taylor" content={infoContent} />
            </div>
        </div>);
    }
}