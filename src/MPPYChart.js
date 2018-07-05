import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Table, Dropdown } from 'semantic-ui-react';
import { bubbleChartDataToYellow } from './store/bubbleChartDataToYellow';
import { Card, Icon } from '@blueprintjs/core'



export default class MPPYChart extends Component {

  state = {
    showTable: 'RIDES',
    showCard: false,
    location: '',
    totalMiles: null,
    totalFares: null,
    totalRides: null,
    faresPerMile: null,
    faresPerRide: null,
    tmRanking: null,
    tfRanking: null,
    trRanking: null,
    fpmRanking: null,
    fprRanking: null

  }

  handleTableChange = (e, { value }) => this.setState({ showTable: value })

  bubbleDataSets = () => {
    let datasets = []
    for (let location in bubbleChartDataToYellow){
      datasets.push(
        {
          label: [location],
          backgroundColor: 'rgba(229, 218, 6,0.2)',
          borderColor: 'rgba(229, 218, 6,1)',
          data: [{
            x: Math.round(bubbleChartDataToYellow[location].totalmiles),
            y: Math.round(bubbleChartDataToYellow[location].totalfares),
            r: bubbleChartDataToYellow[location].totalrides/10000
          }],
          faresPerMile: bubbleChartDataToYellow[location]['fares per mile'],
          faresPerRide: bubbleChartDataToYellow[location]['fares per ride'],
          tmRanking: bubbleChartDataToYellow[location]['total miles ranking'],
          tfRanking: bubbleChartDataToYellow[location]['total fares ranking'],
          trRanking: bubbleChartDataToYellow[location]['total rides ranking'],
          fpmRanking: bubbleChartDataToYellow[location]['fares per mile ranking'],
          fprRanking: bubbleChartDataToYellow[location]['fares per ride ranking']
        }
      )
    }
    return datasets
  }

  tables = () => {
    if (this.state.showTable === 'RIDES') {
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL RIDES FROM, TO YELLOW</Table.Cell><Table.Cell>TOTAL FARES COLLECTED</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>EAST HARLEM SOUTH</Table.Cell><Table.Cell>147,623 - 1st</Table.Cell><Table.Cell>$3,288,673 - 4th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>121,559 - 2nd</Table.Cell><Table.Cell>$3,500,308 - 2nd</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>MORNINGSIDE HEIGHTS</Table.Cell><Table.Cell>112,210 - 3rd</Table.Cell><Table.Cell>$$2,889,019 - 7th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>89,532 - 4th</Table.Cell><Table.Cell>$3,916,109 - 1st</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>DUMBO/VINEGAR HILL</Table.Cell><Table.Cell>53,764 - 5th</Table.Cell><Table.Cell>$3,198,871 - 5th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>CENTRAL PARK</Table.Cell><Table.Cell>46,691 - 6th</Table.Cell><Table.Cell>$2,594,047  - 8th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>WILLIAMSBURG (NORTH SIDE)</Table.Cell><Table.Cell>46,501 - 7th</Table.Cell><Table.Cell>$2,270,520 - 10th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>WASHINGTON HEIGHTS SOUTH</Table.Cell><Table.Cell>42,944 - 8th</Table.Cell><Table.Cell>$2,405,471 - 9th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>BROOKLYN HEIGHTS</Table.Cell><Table.Cell>38,618 - 9th</Table.Cell><Table.Cell>$3,476,182  - 3rd</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>36,470 - 10th</Table.Cell><Table.Cell>$1,868,629 - 15th</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES') {
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES COLLECTED</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>$3,916,109</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>$3,500,308</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>EAST HARLEM SOUTH</Table.Cell><Table.Cell>$3,476,182</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>ASTORIA</Table.Cell><Table.Cell>$3,288,673</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>WILLIAMSBURG (NORTH SIDE)</Table.Cell><Table.Cell>$3,198,871</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>MORNINGSIDE HEIGHTS</Table.Cell><Table.Cell>$2,889,105</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>ELMHURST</Table.Cell><Table.Cell>$2,889,019</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>PARK SLOPE</Table.Cell><Table.Cell>$2,594,047 </Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>FORT GREENE</Table.Cell><Table.Cell>$2,405,471  </Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>$2,270,520 </Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'DISTANCE') {
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL MILES FROM, TO ALL ZONES</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>849,969</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>WILLIAMSBURG NORTH SIDE</Table.Cell><Table.Cell>767,881</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>EAST HARLEM SOUTH</Table.Cell><Table.Cell>755,263</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>748,773</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>ASTORIA</Table.Cell><Table.Cell>730,204</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>MORNINGSIDE HEIGHTS</Table.Cell><Table.Cell>638,117</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>ELMHURST</Table.Cell><Table.Cell>622,759</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>PARK SLOPE</Table.Cell><Table.Cell>568,833</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>WASHINGTON HEIGHTS SOUTH</Table.Cell><Table.Cell>560,742</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>FORT GREENE</Table.Cell><Table.Cell>518,477</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES PER MILE'){
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES PER MILE (USD)</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>FRESHKILLS PARK</Table.Cell><Table.Cell>$72.68</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>NEWARK AIRPORT</Table.Cell><Table.Cell>$26.61</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>BROAD CHANNEL</Table.Cell><Table.Cell>$25.00</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>ROSSVILLE</Table.Cell><Table.Cell>$12.33</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>FORT TILDEN</Table.Cell><Table.Cell>$11.87</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>JFK AIRPORT</Table.Cell><Table.Cell>$11.42</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>ST MICHAELS CEMETERY/WOODSIDE</Table.Cell><Table.Cell>$11.04</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>GREAT KILLS</Table.Cell><Table.Cell>$10.80</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>EMERSON HILL</Table.Cell><Table.Cell>$9.19</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>LAGUARDIA AIRPORT</Table.Cell><Table.Cell>$7.51</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES PER RIDE'){
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES PER RIDE</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>FRESHKILLS PARK</Table.Cell><Table.Cell>$114.83</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>NEWARK AIRPORT</Table.Cell><Table.Cell>$66.16</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>JAMAICA BAY</Table.Cell><Table.Cell>$47.20</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>EMERSON HILL</Table.Cell><Table.Cell>$46.91</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>JFK AIRPORT</Table.Cell><Table.Cell>$39.94</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>HEARTLAND VILLAGE</Table.Cell><Table.Cell>$39.55</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>BROAD CHANNEL</Table.Cell><Table.Cell>$37.50</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>ARDEN HEIGHTS</Table.Cell><Table.Cell>$37.25</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>GRYMES HILL</Table.Cell><Table.Cell>$35.77</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>ROSEDALE</Table.Cell><Table.Cell>$35.26</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    }

  }

  render(){

    const handleBubbleChartClick = (e,i) => {
      if (i[0]) {
        let info = i[0]
        let location = bubbleValues.datasets[info._datasetIndex].label[0]
        let totalMiles = bubbleValues.datasets[info._datasetIndex].data[0].x
        let totalFares = bubbleValues.datasets[info._datasetIndex].data[0].y
        let totalRides = bubbleValues.datasets[info._datasetIndex].data[0].r * 10000
        let faresPerMile = bubbleValues.datasets[info._datasetIndex].faresPerMile
        let faresPerRide = bubbleValues.datasets[info._datasetIndex].faresPerRide
        let tmRanking = bubbleValues.datasets[info._datasetIndex].tmRanking
        let tfRanking = bubbleValues.datasets[info._datasetIndex].tfRanking
        let trRanking = bubbleValues.datasets[info._datasetIndex].trRanking
        let fpmRanking = bubbleValues.datasets[info._datasetIndex].fpmRanking
        let fprRanking = bubbleValues.datasets[info._datasetIndex].fprRanking

        this.setState({
          showCard: true,
          location: location,
          totalMiles: totalMiles,
          totalFares: totalFares,
          totalRides: totalRides,
          faresPerMile: faresPerMile,
          faresPerRide: faresPerRide,
          tmRanking: tmRanking,
          tfRanking: tfRanking,
          trRanking: trRanking,
          fpmRanking: fpmRanking,
          fprRanking: fprRanking
        })
      } else {
        return null
      }

    }
    const bubbleValues = {
      labels: 'ok',
      datasets: this.bubbleDataSets()
    }

    const bubbleOptions = {
      legend: {
        display: false
      },
      layout: {
          padding: {
              left: 30,
              right: 20,
              top: 0,
              bottom: 10
          }
      },
      onHover: (e, i) => {
          handleBubbleChartClick(e,i)
        },
      title: {
        display: true,
        text: 'TOTAL MILES (Miles), TOTAL FARES (USD), TOTAL RIDES (divided by 10,000)',
        fontSize: 10,
        fontFamily: 'Helvetica',
        fontStyle: 'normal'
      },
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: "TOTAL FARES (USD)",
            fontFamily: 'Helvetica',
            fontSize: 8,
            fontStyle: 'normal',
          },
          ticks: {
            fontSize: 7,
            beginAtZero: true
          }
        }],
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: "TOTAL MILES",
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

    
    return (
      <div>
        <br></br>
        <div className='row'>
          <div className='column column-8'>
            <Bubble data={bubbleValues} responsive={false} width={350} height={290} options={bubbleOptions} />
          </div>
          <div className='column column-4'>
          <div>
          {this.state.showCard ?
            <Card className='header-highlight-card' interactive={true}>
              <div className='row'>
                <div className='column column-12 highlight-header'>
                  {this.state.location}
                  <br></br>
                  <div className='highlight-subheader'>
                    Total Rides To Yellow Zone - {this.state.totalRides.toLocaleString()}<br></br>Ranking - {this.state.trRanking}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='column column-6 highlight-label'>
                  TOTAL FARES COLLECTED
                  <br></br>
                  <div className='highlight-ranking'>
                    Ranking - {this.state.tfRanking}
                  </div>
                </div>
                <div className='column column-6 highlight-label-long'>
                  FARES COLLECTED PER MILE
                  <div className='highlight-ranking'>
                    Ranking - {this.state.fpmRanking}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='column column-6 highlight-content'>
                <span className='highlight-units'>$</span>{this.state.totalFares.toLocaleString()}
                </div>
                <div className='column column-6 highlight-content'>
                <span className='highlight-units'>$</span>{this.state.faresPerMile}
                </div>
              </div>
              <br></br>
              <div className='row'>
                <div className='column column-6 highlight-label'>
                  MILES DRIVEN FROM
                  <br></br>
                  <div className='highlight-ranking'>
                    Ranking - {this.state.tmRanking}
                  </div>
                </div>
                <div className='column column-6 highlight-label-long'>
                  FARES COLLECTED PER RIDE
                  <div className='highlight-ranking'>
                    Ranking - {this.state.fprRanking}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='column column-6 highlight-content'>
                {this.state.totalMiles.toLocaleString()}<span className='highlight-units-miles'> miles</span>
                </div>
                <div className='column column-6 highlight-content'>
                <span className='highlight-units'>$</span>{this.state.faresPerRide}
                </div>
              </div>
            </Card>
          :
            <Card className='header-highlight-card' interactive={true}>
              <div className='datapoint-placeholder-arrow'>
                <Icon icon='arrow-left' iconSize={15} />
              </div>
              <div className='datapoint-placeholder'>
                HOVER OVER POINTS IN CHART TO VIEW LOCATION DATA HERE
              </div>
            </Card>
          }

          </div>
          <br></br>
          <div className='side-table'>
            <div className='side-table-title'>
              SELECT TABLE:<span>       </span>
              <Dropdown
                inline
                onChange={this.handleTableChange}
                options=
                  {
                    [
                      {text: 'TOTAL RIDES TO YELLOW ZONE', value: 'RIDES'},
                      {text: 'TOTAL FARES COLLECTED', value: 'FARES'},
                      {text: 'TOTAL MILES DRIVEN FROM', value: 'DISTANCE'},
                      {text: 'TOTAL FARES COLLECTED PER MILE', value: 'FARES PER MILE'},
                      {text: 'TOTAL FARES PER RIDE', value: 'FARES PER RIDE'}

                    ]
                  }
                defaultValue={'RIDES'} />
            </div>
              {this.tables()}
          </div>
        </div>
      </div>
    </div>
    )
  }
}
