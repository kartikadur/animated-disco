import React from 'react';

import { connect } from 'react-redux';
import {
  // BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Login from './Login';

const mapStateToProps = state => ({
  appName: state.appName,
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
