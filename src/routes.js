import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import ContactPage from './components/contact/Contact';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="contact" component={ContactPage} />
  </Route>
);
