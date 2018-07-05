import React, { Component } from 'react';
import { Button, Icon, Card, Overlay } from '@blueprintjs/core'
import './index.css';
import MPDGChart from './MPDGChart';
import MPDYChart from './MPDYChart';
import BDFGChart from './BDFGChart';
import BDFYChart from './BDFYChart';
import MPPGChart from './MPPGChart';
import BDTGChart from './BDTGChart';
import MPPYChart from './MPPYChart';
import BDTYChart from './BDTYChart';

export default class Home extends Component {

  state = {
    MPDGOverlayIsOpen: false,
    MPDYOverlayIsOpen: false,
    BDFGOverlayIsOpen: false,
    BDFYOverlayIsOpen: false,
    MPPGOverlayIsOpen: false,
    BDTGOverlayIsOpen: false,
    MPPYOverlayIsOpen: false,
    BDTYOverlayIsOpen: false
  }

  toggleMPDGOverlay = () => {
    this.setState({
      MPDGOverlayIsOpen: !this.state.MPDGOverlayIsOpen
    })
  }

  toggleMPDYOverlay = () => {
    this.setState({
      MPDYOverlayIsOpen: !this.state.MPDYOverlayIsOpen
    })
  }

  toggleBDFGOverlay = () => {
    this.setState({
      BDFGOverlayIsOpen: !this.state.BDFGOverlayIsOpen
    })
  }

  toggleBDFYOverlay = () => {
    this.setState({
      BDFYOverlayIsOpen: !this.state.BDFYOverlayIsOpen
    })
  }

  toggleMPPGOverlay = () => {
    this.setState({
      MPPGOverlayIsOpen: !this.state.MPPGOverlayIsOpen
    })
  }

  toggleBDTGOverlay = () => {
    this.setState({
      BDTGOverlayIsOpen: !this.state.BDTGOverlayIsOpen
    })
  }

  toggleMPPYOverlay = () => {
    this.setState({
      MPPYOverlayIsOpen: !this.state.MPPYOverlayIsOpen
    })
  }

  toggleBDTYOverlay = () => {
    this.setState({
      BDTYOverlayIsOpen: !this.state.BDTYOverlayIsOpen
    })
  }

  render(){

    return(
      <div className='overhead'>
        <div className ='row' >
          <div className='column column-12 header-title' id='header'>
            GREEN NYC TAXIS
          </div>
        </div>
        <div className='row'>
          <div className='column column-12 header-subheader'>
          HIGH LEVEL HIGHLIGHTS
          </div>
        </div>

          <div className='row header-label-row'>
            <div className='column column-3 header-labels'>
               MOST POPULAR DESTINATION (FROM GREEN):
              <br></br>
              <div className='header-content'>CENTRAL HARLEM NORTH
                <br></br>
                <span className='header-figure'>213,246 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleMPDGOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.MPDGOverlayIsOpen} transitionDuration={0} onClose={this.toggleMPDGOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleMPDGOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      MOST POPULAR DESTINATIONS FROM GREEN ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <MPDGChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              BUSIEST DAY (FROM GREEN):
              <br></br>
              <div className='header-content'>SATURDAYS
                <br></br>
                <span className='header-figure'>1,073,925 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleBDFGOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.BDFGOverlayIsOpen} transitionDuration={0} onClose={this.toggleBDFGOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleBDFGOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      BUSIEST TIMES FROM GREEN ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <BDFGChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              MOST POPULAR DESTINATION (FROM YELLOW):
              <br></br>
              <div className='header-content'>UPPER EAST SIDE NORTH
                <br></br>
                <span className='header-figure'>11,511 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleMPDYOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.MPDYOverlayIsOpen} transitionDuration={0} onClose={this.toggleMPDYOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleMPDYOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      MOST POPULAR DESTINATIONS W/ GREEN CABS
                      <br></br>
                      <span className='chart-title-bottom'>FROM YELLOW ZONES (01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <MPDYChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              BUSIEST DAY (FROM YELLOW):
              <br></br>
              <div className='header-content'>FRIDAYS
                <br></br>
                <span className='header-figure'>16,728 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleBDFYOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.BDFYOverlayIsOpen} transitionDuration={0} onClose={this.toggleBDFYOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleBDFYOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      BUSIEST TIMES FROM YELLOW ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <BDFYChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
          </div>
          <div className='row' style={{marginTop: '2%'}}>
            <div className='column column-3 header-labels'>
              MOST POPULAR PICK-UP LOCATION (TO GREEN):
              <br></br>
              <div className='header-content'>ASTORIA
                <br></br>
                <span className='header-figure'>296,694 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleMPPGOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.MPPGOverlayIsOpen} transitionDuration={0} onClose={this.toggleMPPGOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleMPPGOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      MOST POPULAR PICK-UP LOCATIONS TO GREEN ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <MPPGChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              BUSIEST DAY (TO GREEN):
              <br></br>
              <div className='header-content'>SATURDAYS
                <br></br>
                <span className='header-figure'>893,728 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleBDTGOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.BDTGOverlayIsOpen} transitionDuration={0} onClose={this.toggleBDTGOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleBDTGOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      BUSIEST TIMES TO GREEN ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <BDTGChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              MOST POPULAR PICK-UP LOCATION (TO YELLOW):
              <br></br>
              <div className='header-content'>EAST HARLEM SOUTH
                <br></br>
                <span className='header-figure'>147,623 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleMPPYOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.MPPYOverlayIsOpen} transitionDuration={0} onClose={this.toggleMPPYOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleMPPYOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      MOST POPULAR PICK-UP LOCATIONS TO YELLOW ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <MPPYChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
            <div className='column column-3 header-labels'>
              BUSIEST DAY (TO YELLOW):
              <br></br>
              <div className='header-content'>SATURDAYS
                <br></br>
                <span className='header-figure'>179,025 <span className='header-figure-label'>RIDES</span></span>
                <Button minimal onClick={this.toggleBDTYOverlay} small={true} className='header-buttons'>
                  <Icon  icon='maximize' color='black' iconSize={7} />
                </Button>
                <Overlay isOpen={this.state.BDTYOverlayIsOpen} transitionDuration={0} onClose={this.toggleBDTYOverlay}>
                  <Card className='card-style'>
                    <div className='close-icon'>
                      <Button minimal onClick={this.toggleBDTYOverlay}>
                        <Icon icon='cross' color='black' iconSize={12} />
                      </Button>
                    </div>
                    <div className='header-chart'>
                      <div className='header-chart-title'>
                      BUSIEST TIMES TO YELLOW ZONES
                      <br></br>
                      <span className='chart-title-bottom'>(01/2017 - 06/2017)</span>
                      <br></br>
                      </div>
                      <BDTYChart />
                    </div>
                  </Card>
                </Overlay>
              </div>
            </div>
          </div>
          <br></br>
        </div>


    )
  }
}
