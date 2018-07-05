import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { monthDaysOutboundToYellow} from './store/monthDaysOutboundToYellow';
import { monthHoursOutboundToYellow } from './store/monthHoursOutboundToYellow';
import { Card, Icon } from '@blueprintjs/core'

export default class BDTYChart extends Component {
  state = {
    days: ['mondays', 'tuesdays', 'wednesdays', 'thursdays', 'fridays', 'saturdays', 'sundays'],
    hours: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
    showMiniTable: false,
    month: '',
    totalRides: [],
    totalFares: [],
    totalMiles: [],

    showMiniTable2: false,
    day: '',
    totalRidesPerHour: [],
    totalFaresPerHour: [],
    totalMilesPerHour: []

  }

  render(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June']
    const totalRides = [187541, 179055, 185855, 190495, 187368, 171052]
    const totalMiles = [2750273, 2656563, 2962081, 2881340, 2827149, 2643000]
    const totalFares = [12030211, 11649029, 13231405, 12619778, 12579974, 11699126]
    const handleLineChartClick = (e, i) => {

      if (i[0]) {
        let index = i[0]._index
        let month = chartValues.labels[index].toLowerCase()
        let totalRides = [];
        let totalFares = [];
        let totalMiles = [];

        this.state.days.forEach((day) => {
          totalRides.push(monthDaysOutboundToYellow[month][day]['totalrides'])
          totalFares.push(monthDaysOutboundToYellow[month][day]['totalfares'])
          totalMiles.push(monthDaysOutboundToYellow[month][day]['totalmiles'])

        })
        this.setState({
          showMiniTable: true,
          showMiniTable2: false,
          month: month,
          totalRides: totalRides,
          totalFares: totalFares,
          totalMiles: totalMiles,

        })
      } else {
        return null
      }
    }

    const handleMiniChartClick = (e,i) => {
        if (i[0]){
          let index = i[0]._index
          let day = miniChartValues.labels[index].toLowerCase()
          let month = miniChartOptions.misc.month
          let totalRidesPerHour = [];
          let totalFaresPerHour = [];
          let totalMilesPerHour = [];

          this.state.hours.forEach((hour) => {
            totalRidesPerHour.push(monthHoursOutboundToYellow[month][day][hour]['totalrides'])
            totalFaresPerHour.push(monthHoursOutboundToYellow[month][day][hour]['totalfares'])
            totalMilesPerHour.push(monthHoursOutboundToYellow[month][day][hour]['totalmiles'])
          })
          this.setState({
            showMiniTable2: true,
            day: day,
            totalRidesPerHour: totalRidesPerHour,
            totalFaresPerHour: totalFaresPerHour,
            totalMilesPerHour: totalMilesPerHour,
          })
        } else {
          return null
        }
    }

    const chartValues = {
      labels: months.map(month => month.toUpperCase()),
      datasets:
        [
          {
            type: 'line',
            label: 'TOTAL RIDES (to yellow zones only)',
            data: totalRides,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(229, 218, 6)',
            pointRadius: 2,
            borderWidth: 1

          }, {

            type: 'line',
            label: 'TOTAL MILES - Miles (to all zones)',
            data: totalMiles,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(128, 132, 128)',
            pointRadius: 2,
            borderWidth: 1

          }, {

            type: 'line',
            label: 'TOTAL FARES - USD (to all zones)',
            data: totalFares,
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgb(36, 43, 36)',
            pointRadius: 2,
            borderWidth: 1

          }

        ]
      }

      const chartOptions = {
          legend: {
            display: true,
            labels: {
              fontColor: 'black',
              fontSize: 10,
              boxWidth: 12
            }
          },
          layout: {
              padding: {
                  left: 30,
                  right: 20,
                  top: 0,
                  bottom: 10
              }
          },
          onClick: (e, i) => {
            handleLineChartClick(e,i)
            },
          scales: {
            yAxes: [{
              scaleLabel: {
                display: false,
                labelString: "NO. OF RIDES / TOTAL FARES COLLECTED (USD)",
                fontFamily: 'Helvetica',
                fontSize: 8,
                fontStyle: 'normal',
                fontColor: 'rgb(60,60,60)'
              },
              ticks: {
                fontSize: 7,
                beginAtZero: true
              }
            }],
            xAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'MONTHS',
                fontFamily: 'Helvetica',
                fontSize: 10,
                fontStyle: 'normal',
                fontColor: 'rgb(60,60,60)'
              },
              ticks: {
                fontSize: 7
              }
            }]
          }
        }

        const miniChartValues = {
          labels: this.state.days.map(day => day.toUpperCase()),
          datasets:
            [
              {
                type: 'line',
                label: 'TOTAL RIDES (to yellow zones only)',
                data: this.state.totalRides,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(229, 218, 6)',
                pointRadius: 1,
                borderWidth: 1

              }, {

                type: 'line',
                label: 'TOTAL MILES TO ALL ZONES',
                data: this.state.totalMiles,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(128, 132, 128)',
                pointRadius: 1,
                borderWidth: 1

              }, {

                type: 'line',
                label: 'TOTAL FARES - USD (to all zones)',
                data: this.state.totalFares,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgb(36, 43, 36)',
                pointRadius: 1,
                borderWidth: 1

              }

            ]
          }

          const miniChartOptions = {
            misc: {
              month: `${this.state.month}`
            },
            title: {
              display: true,
              text: `DAILY ACTIVITY IN ${this.state.month.toUpperCase()}`,
              fontSize: 6,
              fontFamily: 'Helvetica',
              fontStyle: 'bold'
            },
              legend: {
                display: false,
                labels: {
                  fontColor: 'black',
                  fontSize: 6,
                  boxWidth: 6
                }
              },
              onHover: (e, i) => {
                handleMiniChartClick(e,i)
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
                    display: false,
                    labelString: "NO. OF RIDES / TOTAL FARES COLLECTED (USD)",
                    fontFamily: 'Helvetica',
                    fontSize: 6,
                    fontStyle: 'normal',
                    fontColor: 'rgb(60,60,60)'
                  },
                  ticks: {
                    fontSize: 5,
                    beginAtZero: true,
                    steps: 10

                  }
                }],
                xAxes: [{
                  scaleLabel: {
                    display: true,
                    labelString: 'DAYS',
                    fontFamily: 'Helvetica',
                    fontSize: 7,
                    fontStyle: 'normal',
                    fontColor: 'rgb(60,60,60)'
                  },
                  ticks: {
                    fontSize: 5
                  }
                }]
              }
            }


                    const miniChartValues2 = {
                      labels: this.state.hours.map(hour => hour.toUpperCase()),
                      datasets:
                        [
                          {
                            type: 'line',
                            label: 'TOTAL RIDES (to yellow zones only)',
                            data: this.state.totalRidesPerHour,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgb(229, 218, 6)',
                            pointRadius: 1,
                            borderWidth: 1

                          }, {

                            type: 'line',
                            label: 'TOTAL MILES TO ALL ZONES',
                            data: this.state.totalMilesPerHour,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgb(128, 132, 128)',
                            pointRadius: 1,
                            borderWidth: 1

                          }, {

                            type: 'line',
                            label: 'TOTAL FARES - USD (to all zones)',
                            data: this.state.totalFaresPerHour,
                            backgroundColor: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgb(36, 43, 36)',
                            pointRadius: 1,
                            borderWidth: 1

                          }

                        ]
                      }

                      const miniChartOptions2 = {

                        title: {
                          display: true,
                          text: `HOURLY ACTIVITY ON ${this.state.day.toUpperCase()} IN ${this.state.month.toUpperCase()}`,
                          fontSize: 6,
                          fontFamily: 'Helvetica',
                          fontStyle: 'bold'
                        },
                          legend: {
                            display: false,
                            labels: {
                              fontColor: 'black',
                              fontSize: 6,
                              boxWidth: 6
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
                                display: false,
                                labelString: "NO. OF RIDES / TOTAL FARES COLLECTED (USD)",
                                fontFamily: 'Helvetica',
                                fontSize: 6,
                                fontStyle: 'normal',
                                fontColor: 'rgb(60,60,60)'
                              },
                              ticks: {
                                fontSize: 5,
                                beginAtZero: true,
                                steps: 10

                              }
                            }],
                            xAxes: [{
                              scaleLabel: {
                                display: true,
                                labelString: 'HOURS',
                                fontFamily: 'Helvetica',
                                fontSize: 7,
                                fontStyle: 'normal',
                                fontColor: 'rgb(60,60,60)'
                              },
                              ticks: {
                                fontSize: 5
                              }
                            }]
                          }
                        }


    return (
      <div>
        <br></br>
        <div className='row'>
          <div className='column column-7'>
            <Bar data={chartValues} responsive={false} width={350} height={290} options={chartOptions} />
          </div>

          <div className='column column-5'>
            <div className='row'>
              {this.state.showMiniTable ?
                <Card className='header-highlight-card-time' interactive={true}>
                  <Bar data={miniChartValues} responsive={false} width={175} height={110} options={miniChartOptions} />
                </Card>
              :
                <Card className='header-highlight-card' interactive={true}>
                  <div className='datapoint-placeholder-arrow'>
                    <Icon icon='arrow-left' iconSize={15} />
                  </div>
                  <div className='datapoint-placeholder-time'>
                    CLICK ON POINTS IN CHART ON THE LEFT TO
                    VIEW DAILY DATA HERE
                  </div>
                </Card>
              }
            </div>
            <br></br>
            <div className='row'>
              {this.state.showMiniTable2 ?
                <Card className='header-highlight-card-time' interactive={true}>
                  <Bar data={miniChartValues2} responsive={false} width={175} height={110} options={miniChartOptions2} />
                </Card>
              :
                <Card className='header-highlight-card' interactive={true}>
                  <div className='datapoint-placeholder-arrow'>
                    <Icon icon='arrow-up' iconSize={15} />
                  </div>
                  <div className='datapoint-placeholder-time'>
                    HOVER ON POINTS ABOVE TO
                    VIEW HOURLY DATA HERE
                  </div>
                </Card>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
