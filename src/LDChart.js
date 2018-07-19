import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { locationData } from './store/locationData';
import { locationPerHour } from './store/locationPerHour';
import { Button } from '@blueprintjs/core';



export default class LDChart extends Component {

   state = {
     activeChart: 'DAILY'
   }

   showDaily = () => {
     this.setState({
       activeChart: 'DAILY'
     })
   }

   showHourly = () => {
     this.setState({
       activeChart: 'HOURLY'
     })
   }

  render(){
    const location = this.props.location
    const days = ['mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays', 'sundays']
    const hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']

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

    const totalRidesPerHourGreen = () => {
      let result = [];
      hours.forEach((hour) => {
        if (location) {
          result.push(locationPerHour[location]['totalridesgreen'][hour])
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

    const totalRidesPerHourGreenOutbound = () => {
      let result = [];
      hours.forEach((hour) => {
        if (location) {
          result.push(locationPerHour[location]['totalridesgreenoutbound'][hour])
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

    const totalRidesPerHourYellow = () => {
      let result = [];
      hours.forEach((hour) => {
        if (location) {
          result.push(locationPerHour[location]['totalridesyellow'][hour])
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

    const totalRidesPerHourYellowOutbound = () => {
      let result = [];
      hours.forEach((hour) => {
        if (location) {
          result.push(locationPerHour[location]['totalridesyellowoutbound'][hour])
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


  const hourlyChartValues = {
    labels: hours,
    datasets:
      [
        {
          type: 'line',
          label: 'TOTAL RIDES INBOUND FROM YELLOW ',
          data: totalRidesPerHourYellow(),
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(229, 218, 6)',
          pointRadius: 2,
          borderWidth: 1

        },
        {
          type: 'line',
          label: 'TOTAL RIDES INBOUND FROM GREEN',
          data: totalRidesPerHourGreen(),
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(42, 145, 44)',
          pointRadius: 2,
          borderWidth: 1

        },
        {
          type: 'line',
          label: 'TOTAL RIDES OUTBOUND TO YELLOW',
          data: totalRidesPerHourYellowOutbound(),
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderColor: 'rgb(214, 219, 76)',
          pointRadius: 2,
          borderWidth: 1,
          borderDash: [10,5]
        },
        {
          type: 'line',
          label: 'TOTAL RIDES OUTBOUND TO GREEN',
          data: totalRidesPerHourGreenOutbound(),
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
                fontSize: 8,
                autoSkip: false,
                maxRotation: 0,
                minRotation: 0
              }
            }]
          }
        }

        const hourlyChartOptions = {

          title: {
            display: false,
            text: `HOURLY ACTIVITY INBOUND TO AND OUTBOUND FROM - ${this.props.location} `,
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
                  labelString: 'HOURS',
                  fontFamily: 'Helvetica',
                  fontSize: 10,
                  fontStyle: 'normal',
                  fontColor: 'rgb(60,60,60)'
                },
                ticks: {
                  fontSize: 8,
                  autoSkip: false,
                  maxRotation: 90,
                  minRotation: 90
                }
              }]
            }
          }

    const activeChart = () => {
      if (this.state.activeChart === 'DAILY') {
        return(
          <Bar data={dailyChartValues} responsive={false} width={260} height={120} options={dailyChartOptions} />
        )
      }
      else if (this.state.activeChart === 'HOURLY') {
        return(
          <Bar data={hourlyChartValues} responsive={false} width={260} height={120} options={hourlyChartOptions} />
        )
      }
    }

    return(
      <div>
        <span style={{fontSize: '80%', marginLeft: '8%'}}>{location.toUpperCase()}</span>
        <br></br>
        <span style={{fontSize: '70%',  marginLeft: '8%', color: 'grey'}}>{this.state.activeChart[0] + this.state.activeChart.slice(1).toLowerCase()} Activity Inbound from and Outbound to (01/2017 - 06/2017)</span>
        <br></br>
        {activeChart()}
        <div style={{textAlign: 'center', marginLeft: '4.5%', marginTop: '1%'}}>
          <Button minimal small={true} onClick={this.showDaily} active={this.state.activeChart === 'DAILY'} style={{fontSize: '45%'}}>
            BY DAY
          </Button>
          <Button minimal small={true} onClick={this.showHourly} active={this.state.activeChart === 'HOURLY'} style={{fontSize: '45%'}}>
            BY HOUR
          </Button>
        </div>
      </div>
    )
  }
}
