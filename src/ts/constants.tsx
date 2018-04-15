import * as React from 'react';
import {RouteHandler, RouteInfo} from './routeHandler';
import HomeContainer from './container/home';
import AboutContainer from './container/about';
import ProjectsContainer from './container/projects';

export const infoContent: JSX.Element = (<p className="info-text">
    Welcome to my personal website.
    This is still a work-in-progress,
    but it will eventually provide a look into the projects I'm currently working on or have finished.
</p>);

export const aboutContent: JSX.Element = (<div>
    <p className="info-text">
        I'm Wes Taylor, a sophomore at West Monroe High School.
        I've been playing tennis since 8th grade and I play on the varsity team.
    </p>
    <hr className="hr-sm" />
    <p className="info-text">
        Ever since the 4th grade, I've been learning how to write code.
        I've self-taught almost any computer programming technology you can think of, including how to make websites, such as this one.
    </p>
    <hr className="hr-sm" />
    <p className="info-text">
        When I'm not banging away at my keyboard, I like to listen to Spotify, and I'll listen to literally any genre as long as the song is good. &#128514;
    </p>
</div>);

export const routeHandler: RouteHandler = new RouteHandler("/home", [
    {path: "/home", component: HomeContainer},
    {path: "/about", component: AboutContainer},
    {path: "/projects", component: ProjectsContainer}
]);