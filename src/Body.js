import React, { Component } from 'react';
import './index.css';
// import Form from './Form';
import { locations } from './store/locationData';
import { bubbleChartData } from './store/bubbleChartData';
import { bubbleChartDataYellow } from './store/bubbleChartDataYellow';
import { bubbleChartDataToYellow } from './store/bubbleChartDataToYellow';
import { bubbleChartDataOutbound } from './store/bubbleChartDataOutbound';

import LDChart from './LDChart';
import { Card } from '@blueprintjs/core';



export default class Body extends Component {

  state = {
    locationChoice: ''
  }

  handleSelect = (event) => {
    this.setState({
      locationChoice: event.target.value
    })
  }


  render(){
    const locationNames = locations.map(location => {
      return <option key={locations.indexOf(location)} value={location}>{location}</option>
    })
    return(
      <div>
        <div className ='row'>
          <div className='column column-6 body-title'>
            LOWER-LEVEL ANALYSIS
          </div>
        </div>

        <div className ='row'>
          <div className='column column-4'>
          {this.state.locationChoice !== '' ?
            <Card interactive={true}>
              <div className='row' style={{marginLeft: '5%'}}>
                <div className='column column-6'>
                  <div className='sidebar-content'>
                    {bubbleChartData[this.state.locationChoice]['totalrides'].toLocaleString()}<span className='sidebar-figure-units'> RIDES</span>
                  </div>
                  <div className='sidebar-label'>
                    INBOUND FROM GREEN
                  </div>
                </div>
                <div className='column column-6' style={{marginLeft: '1%'}}>
                  <div className='sidebar-content'>
                    {bubbleChartDataOutbound[this.state.locationChoice]['totalrides'].toLocaleString()}<span className='sidebar-figure-units'> RIDES</span>
                  </div>
                  <div className='sidebar-label'>
                    OUTBOUND TO GREEN
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className='row' style={{marginLeft: '5%'}}>
                <div className='column column-6'>
                  <div className='sidebar-content'>
                    {bubbleChartDataYellow[this.state.locationChoice]['totalrides'].toLocaleString()}<span className='sidebar-figure-units'> RIDES</span>
                  </div>
                  <div className='sidebar-label'>
                    INBOUND FROM YELLOW
                  </div>
                </div>
                <div className='column column-6' style={{marginLeft: '1%'}}>
                  <div className='sidebar-content'>
                    {bubbleChartDataToYellow[this.state.locationChoice]['totalrides'].toLocaleString()}<span className='sidebar-figure-units'> RIDES</span>
                  </div>
                  <div className='sidebar-label'>
                    OUTBOUND TO YELLOW
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className='row' style={{marginLeft: '5%'}}>
                <div className='column column-6'>
                  <div className='sidebar-content'>
                    <span className='sidebar-figure-dollar'>$</span>{Math.round(bubbleChartData[this.state.locationChoice]['totalfares']).toLocaleString()}
                  </div>
                  <div className='sidebar-label'>
                    TOTAL FARES INBOUND
                  </div>
                </div>
                <div className='column column-6' style={{marginLeft: '1%'}}>
                  <div className='sidebar-content'>
                    <span className='sidebar-figure-dollar'>$</span>{Math.round(bubbleChartDataOutbound[this.state.locationChoice]['totalfares']).toLocaleString()}
                  </div>
                  <div className='sidebar-label'>
                    TOTAL FARES OUTBOUND
                  </div>
                </div>
              </div>
              <br></br>
              <br></br>
              <div className='row' style={{marginLeft: '5%'}}>
                <div className='column column-6'>
                  <div className='sidebar-content'>
                    {Math.round(bubbleChartData[this.state.locationChoice]['totalmiles']).toLocaleString()}<span className='sidebar-figure-units'> MILES</span>
                  </div>
                  <div className='sidebar-label'>
                    MILES DRIVEN INBOUND
                  </div>
                </div>
                <div className='column column-6' style={{marginLeft: '1%'}}>
                  <div className='sidebar-content'>
                    {Math.round(bubbleChartDataOutbound[this.state.locationChoice]['totalmiles']).toLocaleString()}<span className='sidebar-figure-units'> MILES</span>
                  </div>
                  <div className='sidebar-label'>
                    MILES DRIVEN OUTBOUND
                  </div>
                </div>
              </div>
              <br></br>
            </Card>
          :
            <Card interactive={true}>
              <span className='sidebar-placeholder'>SELECT LOCATION TO VIEW DETAILS HERE</span>
            </Card>
          }

          </div>
          <div className='column column-7'>
              <div className="pt-select pt-minimal" style={{ marginTop: '0%', marginLeft: '6.6%'}}>
                <select onChange={this.handleSelect}>
                  <option >Select Location</option>
                    {locationNames}
                </select>
              </div>
              <br></br>
              <br></br>
              <LDChart location={this.state.locationChoice}/>

          </div>
        </div>
      </div>
    )
  }
}
