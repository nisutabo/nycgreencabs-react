import React, { Component } from 'react';
import './index.css';
import Body from './Body';
import Overhead from './Overhead';

export default class Home extends Component {
  render(){
    return(
      <div style={{marginLeft: '5%'}}>
        <Overhead />
        <Body />
      </div>
    )
  }
}
