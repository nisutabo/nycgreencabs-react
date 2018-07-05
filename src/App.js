import React, { Component } from 'react';
import Home from './Home';
import { connect } from 'react-redux';


class App extends Component {



  render() {
    return (
      <div id='main'>
        <Home />
      </div>
    );
  }
}

export default connect(null, { getLocations })(App);
