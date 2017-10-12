import ReactDOM from 'react-dom';
import React from 'react';

import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Route,
  // Switch
} from 'react-router-dom';


import store from './store';

import App from './components/App';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));