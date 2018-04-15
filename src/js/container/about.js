import React, { Component } from 'react';
import {aboutContent,routes} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class AboutContainer extends Component {
    render() {
        return (<div>
            <PageHeader pageTitle="about me" routes={routes} />
            <div className="container">
                <VisualTextCard src="public/img/aboutme.png" title="Who am I?" content={aboutContent} />
            </div>
        </div>);
    }
}