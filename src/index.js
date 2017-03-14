import 'babel-polyfill';
import React from 'react';
import {Router, browserHistory} from 'react-router';
import { render } from 'react-dom';
import routes from './routes';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux'; //used to connect react components with store
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

//Provider wraps our whole application here thus connecting store to all components

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  <Provider />,
  document.getElementById('app')
);
