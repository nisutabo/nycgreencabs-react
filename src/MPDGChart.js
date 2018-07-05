import React, { Component } from 'react';
import { Bubble } from 'react-chartjs-2';
import { Table, Dropdown } from 'semantic-ui-react';
import { bubbleChartData } from './store/bubbleChartData';
import { Card, Icon } from '@blueprintjs/core'



export default class MPDGChart extends Component {

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
    for (let location in bubbleChartData){
      datasets.push(
        {
          label: [location],
          backgroundColor: 'rgba(62, 168, 100,0.2)',
          borderColor: 'rgba(62, 168, 100,1)',
          data: [{
            x: Math.round(bubbleChartData[location].totalmiles),
            y: Math.round(bubbleChartData[location].totalfares),
            r: bubbleChartData[location].totalrides/10000
          }],
          faresPerMile: bubbleChartData[location]['fares per mile'],
          faresPerRide: bubbleChartData[location]['fares per ride'],
          tmRanking: bubbleChartData[location]['total miles ranking'],
          tfRanking: bubbleChartData[location]['total fares ranking'],
          trRanking: bubbleChartData[location]['total rides ranking'],
          fpmRanking: bubbleChartData[location]['fares per mile ranking'],
          fprRanking: bubbleChartData[location]['fares per ride ranking']
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
            <Table.Row className='side-table-row'><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL RIDES TO, FROM GREEN</Table.Cell><Table.Cell>TOTAL FARES COLLECTED</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>213,246 - 1st</Table.Cell><Table.Cell>$1,601,616 - 3rd</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>211,566 - 2nd</Table.Cell><Table.Cell>$1,608,551 - 2nd</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>ASTORIA</Table.Cell><Table.Cell>200,891 - 3rd</Table.Cell><Table.Cell>$1,658,806 - 1st</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>187,943 - 4th</Table.Cell><Table.Cell>$1,333,194 - 9th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>JACKSON HEIGHTS</Table.Cell><Table.Cell>177,412 - 5th</Table.Cell><Table.Cell>$1,592,290 - 4th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>PARK SLOPE</Table.Cell><Table.Cell>160,918 - 6th</Table.Cell><Table.Cell>$1,470,947 - 6th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>EAST HARLEM SOUTH</Table.Cell><Table.Cell>129,194 - 7th</Table.Cell><Table.Cell>$1,117,883 - 11th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>ELMHURST</Table.Cell><Table.Cell>126,368 - 8th</Table.Cell><Table.Cell>$1,125,197 - 10th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>MORNINGSIDE HEIGHTS</Table.Cell><Table.Cell>117,418 - 9th</Table.Cell><Table.Cell>$950,865  - 16th</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>STEINWAY</Table.Cell><Table.Cell>116,403 - 10th</Table.Cell><Table.Cell>$1,042,715 - 12th</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES') {
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES COLLECTED</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>ASTORIA</Table.Cell><Table.Cell>$1,658,806</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>$1,608,566</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>$1,601,616</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>JACKSON HEIGHTS</Table.Cell><Table.Cell>$1,592,290</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>JFK AIRPORT</Table.Cell><Table.Cell>$1,575,346</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>PARK SLOPE</Table.Cell><Table.Cell>$1,470,947</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>LAGUARDIA AIRPORT</Table.Cell><Table.Cell>$1,420,984 </Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>CROWN HEIGHTS NORTH</Table.Cell><Table.Cell>$1,355,676 </Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>$1,333,217  </Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>ELMHURST</Table.Cell><Table.Cell>$1,125,197 </Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'DISTANCE') {
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL MILES TO, FROM ALL ZONES</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>JFK AIRPORT</Table.Cell><Table.Cell>517,859</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>LAGUARDIA AIRPORT</Table.Cell><Table.Cell>410,746</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>ASTORIA</Table.Cell><Table.Cell>333,116</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>JACKSON HEIGHTS</Table.Cell><Table.Cell>312,008</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>302,273</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>294,836</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>PARK SLOPE</Table.Cell><Table.Cell>290,452</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>CROWN HEIGHTS NORTH</Table.Cell><Table.Cell>267,823</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>233,668</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>STEINWAY</Table.Cell><Table.Cell>223,762</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES PER MILE'){
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES PER MILE (USD)</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>ST. MICHAELS CEMETERY/WOODSIDE</Table.Cell><Table.Cell>$6.34</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>CENTRAL HARLEM</Table.Cell><Table.Cell>$5.71</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>FORT GREENE</Table.Cell><Table.Cell>$5.55</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>BOERUM HILL</Table.Cell><Table.Cell>$5.47</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>EAST HARLEM NORTH</Table.Cell><Table.Cell>$5.46</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>DOWNTOWN BROOKLYN</Table.Cell><Table.Cell>$5.45</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>MANHATTANVILLE</Table.Cell><Table.Cell>$5.40</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>BROOKLYN HEIGHTS</Table.Cell><Table.Cell>$5.36</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>MORNINGSIDE HEIGHTS</Table.Cell><Table.Cell>$5.34</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>CENTRAL HARLEM NORTH</Table.Cell><Table.Cell>$5.30</Table.Cell></Table.Row>

          </Table.Body>
        </Table>
      )
    } else if (this.state.showTable === 'FARES PER RIDE'){
      return (
        <Table basic='very' compact>
          <Table.Body>
            <Table.Row className='side-table-row'><Table.Cell>RANKING</Table.Cell><Table.Cell>LOCATION</Table.Cell><Table.Cell>TOTAL FARES PER RIDE</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>1</Table.Cell><Table.Cell>NEWARK AIRPORT</Table.Cell><Table.Cell>$82.89</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>2</Table.Cell><Table.Cell>ARDEN HEIGHTS</Table.Cell><Table.Cell>$63.89</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>3</Table.Cell><Table.Cell>TOTTENVILLE</Table.Cell><Table.Cell>$51.70</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>4</Table.Cell><Table.Cell>ANNADALE</Table.Cell><Table.Cell>$50.84</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>5</Table.Cell><Table.Cell>ROSSVILLE</Table.Cell><Table.Cell>$50.16</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>6</Table.Cell><Table.Cell>EMERSON HILL</Table.Cell><Table.Cell>$48.93</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>7</Table.Cell><Table.Cell>GREAT KILLS</Table.Cell><Table.Cell>$47.25</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>8</Table.Cell><Table.Cell>ARVERNE</Table.Cell><Table.Cell>$46.12</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>9</Table.Cell><Table.Cell>JAMAICA BAY</Table.Cell><Table.Cell>$43.75</Table.Cell></Table.Row>

            <Table.Row className='side-table-column'><Table.Cell>10</Table.Cell><Table.Cell>OAKWOOD</Table.Cell><Table.Cell>$43.33</Table.Cell></Table.Row>

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
                    Total Rides From Green Zone - {this.state.totalRides.toLocaleString()}<br></br>Ranking - {this.state.trRanking}
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
                  MILES DRIVEN TO
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
                      {text: 'TOTAL RIDES FROM GREEN ZONE', value: 'RIDES'},
                      {text: 'TOTAL FARES COLLECTED', value: 'FARES'},
                      {text: 'TOTAL MILES DRIVEN TO', value: 'DISTANCE'},
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
