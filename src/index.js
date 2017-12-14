import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const render = App => ReactDom.hydrate(
  <App />,
  document.getElementById('root')
);

render(App);