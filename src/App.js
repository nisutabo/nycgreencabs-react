import React, { Component } from 'react';
import Home from './Home';
import { getLocations } from './actions';
import { connect } from 'react-redux';


class App extends Component {

  componentDidMount(){
    this.props.getLocations()
  }


  render() {
    return (
      <div id='main'>
        <Home />
      </div>
    );
  }
}

export default connect(null, { getLocations })(App);
