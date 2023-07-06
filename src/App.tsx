import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './Home';
import { Lists } from './Lists';

import './App.css';

const App = () => (
    <Router history={createBrowserHistory()}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route exact={true} path="/albums/:id" children={<Lists type='albums' />} />
      <Route exact={true} path="/posts/:id" children={<Lists type='posts' />} />
    </Switch>
    </Router>
);

export default App;
