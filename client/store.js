import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import the root reducer
import routeReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

// create object for default data
const defaultState = {
  posts,
  comments,
};

const store = createStore(
  routeReducer,
  defaultState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;