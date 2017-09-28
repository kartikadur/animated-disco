import React from 'react';

import { render } from 'react-dom';

// React router deps
import { Router, Route, IndexRoute, browserHistory, } from 'react-router';

// Import components
import App from './components/App';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

// Import CSS
import css from './styles/style.styl';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path='/view/:postId' component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));