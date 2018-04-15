import * as React from 'react';
import {Component} from 'react';
import {aboutContent} from '../constants';
import PageHeader from '../presentational/pageHeader';
import VisualTextCard from '../presentational/visualTextCard';

export default class AboutContainer extends Component<any, any> {
    render() {
        return (<div>
            <PageHeader pageTitle="about me" />
            <div className="container">
                <VisualTextCard src="public/img/aboutme.png" title="Who am I?" content={aboutContent} />
            </div>
        </div>);
    }
}