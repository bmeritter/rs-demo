import React, {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Demo from './components';


render(
  <Router history={browserHistory}>
    <Route path={'/demo'} component={Demo}/>
  </Router>,
  document.getElementById('app'));

