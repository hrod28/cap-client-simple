'use strict';
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="chefs" component={ChefsPage} />
    <Route path="users" component={UserProfilePage} />
    <Route path="votes" component={VoteTalliesPage} />
    <Route path="feed" component={FeedPage} />
    <Route path="map" component={MapPage} />
  </Route>
);
