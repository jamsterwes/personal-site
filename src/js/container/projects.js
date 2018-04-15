import React, { Component } from 'react';
import {infoContent,routes} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class ProjectsContainer extends Component {
    render() {
        return (<div>
            <PageHeader pageTitle="my projects" routes={routes} />
            <div className="container">
                <VisualTextCard src="public/img/code.png" title="I write code" content={infoContent} />
            </div>
        </div>);
    }
}