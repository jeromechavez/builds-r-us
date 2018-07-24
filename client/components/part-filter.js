import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = {
  root: {
    backgroundColor: 'black'
  }
}
export default class PartFilter extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value: 0
    }
  }

  handleChange(event, value) {
    this.setState({ value })
  }
  render() {
    return (
      <div>
        <AppBar position="static" style={styles.root}>
          <Tabs 
            value={this.state.value} 
            onChange={this.handleChange} 
            indicatorColor="primary"
            textColor="inherit"
            scrollable
          >
            <Tab label="All" href="#parts"/>
            <Tab label="Processors" href="#parts?type=processor" />
            <Tab label="Cooling" href="#parts?type=cooling"/>
            <Tab label="Motherboards" href="#parts?type=motherboard"/>
            <Tab label="Video Cards" href="#parts?type=GPU" />
            <Tab label="Cases" href="#parts?type=case"/>
            <Tab label="Memory(RAM)" href="#parts?type=memory"/>
            <Tab label="Storage" href="#parts?type=storage"/>
            <Tab label="Power Supplies" href="#parts?type=powersupply"/>
          </Tabs>
        </AppBar>
      </div>
    )
  }
}