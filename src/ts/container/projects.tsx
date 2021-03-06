import * as React from 'react';
import {Component} from 'react';
import {infoContent, routeHandler} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class ProjectsContainer extends Component<{}, {}> {
    render() {
        return (<div>
            <PageHeader pageTitle="my projects" />
            <div className="container">
                <VisualTextCard src="public/img/code.png" title="I write code" content={infoContent} />
            </div>
        </div>);
    }
}