import React, { Component } from 'react';
import {infoContent,routes} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class HomeContainer extends Component {
    render() {
        return (<div>
            <PageHeader pageTitle="wes taylor" routes={routes} />
            <div className="container">
                <VisualTextCard src="public/img/familia.jpg" title="Hi, I'm Wes Taylor" content={infoContent} />
            </div>
        </div>);
    }
}