import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { locationData } from './store/locationData';


export default class LDChart extends Component {

  render(){
    const location = this.props.location
    const days = ['mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays', 'sundays']
    const totalRidesGreen = () => {
      let result = [];
      days.forEach((day) => {
        if (location) {
          result.push(locationData[location]['totalridesgreen'][day])
        } else {
          return null
        }
      })
      return result
    }
    const totalRidesGreenOutbound = () => {
      let result = [];
      days.forEach((day) => {
        if (location) {
          result.push(locationData[location]['totalridesgreenoutbound'][day])
        } else {
          return null
        }
      })
      return result
    }

    const totalRidesYellow = () => {
      let result = [];
      days.forEach((day) => {
        if (location) {
          result.push(locationData[location]['totalridesyellow'][day])
        } else {
          return null
        }
      })
      return result
    }

    const totalRidesYellowOutbound = () => {
      let result = [];
      days.forEach((day) => {
        if (location) {
          result.push(locationData[location]['totalridesyellowoutbound'][day])
        } else {
          return null
        }
      })
      return result
    }

    const dailyChartValues = {
      labels: days.map(day => day.toUpperCase()),
      datasets:
        [
          {
            type: 'line',
            label: 'TOTAL RIDES INBOUND FROM YELLOW ',
            data: totalRidesYellow(),
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(229, 218, 6)',
            pointRadius: 2,
            borderWidth: 1

          },
          {
            type: 'line',
            label: 'TOTAL RIDES INBOUND FROM GREEN',
            data: totalRidesGreen(),
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(42, 145, 44)',
            pointRadius: 2,
            borderWidth: 1

          },
          {
            type: 'line',
            label: 'TOTAL RIDES OUTBOUND TO YELLOW',
            data: totalRidesYellowOutbound(),
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(214, 219, 76)',
            pointRadius: 2,
            borderWidth: 1,
            borderDash: [10,5]
          },
          {
            type: 'line',
            label: 'TOTAL RIDES OUTBOUND TO GREEN',
            data: totalRidesGreenOutbound(),
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(121, 175, 122)',
            pointRadius: 2,
            borderWidth: 1,
            borderDash: [10,5]
          }

        ]
      }
      const dailyChartOptions = {

        title: {
          display: false,
          text: `DAILY ACTIVITY INBOUND TO AND OUTBOUND FROM - ${this.props.location} `,
          fontSize: 6,
          fontFamily: 'Helvetica',
          fontStyle: 'bold',
          texAlign: 'left'
        },
          legend: {
            display: false,
            position: 'right',
            labels: {
              fontColor: 'black',
              fontSize: 5,
              boxWidth: 5
            }
          },
          layout: {
              padding: {
                  left: 0,
                  right: 0,
                  top: -10,
                  bottom: 0
              }
          },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: "NO. OF RIDES",
                fontFamily: 'Helvetica',
                fontSize: 10,
                fontStyle: 'normal',
                fontColor: 'rgb(60,60,60)'
              },
              ticks: {
                fontSize: 8,
                beginAtZero: true,
                steps: 10

              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'DAYS',
                fontFamily: 'Helvetica',
                fontSize: 10,
                fontStyle: 'normal',
                fontColor: 'rgb(60,60,60)'
              },
              ticks: {
                fontSize: 8
              }
            }]
          }
        }

    return(
      <div>
        <span style={{fontSize: '80%', marginLeft: '8%'}}>{location.toUpperCase()}</span>
        <br></br>
        <span style={{fontSize: '70%',  marginLeft: '8%', color: 'grey'}}>Daily Activity Inbound to and Outbound from (01/2017 - 06/2017)</span>
        <br></br>
        <Bar data={dailyChartValues} options={dailyChartOptions} responsive={false} width={250} height={120} />
      </div>
    )
  }
}
