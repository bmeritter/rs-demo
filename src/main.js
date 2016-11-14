import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Demo from './components/demo';
import Login from './components/login';

render(
  <Router history={browserHistory}>
    <Route path={'/login'} component={Login}/>
    <Route path={'/demo'} component={Demo}/>
  </Router>,
  document.getElementById('app'));

