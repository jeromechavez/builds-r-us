import React, { Component } from 'react'
import parseHash from './util/hash'
import GridView from './views/grid-view'
import BuildView from './views/build-view'
import NavBar from './components/nav-bar'

const styles = {
  root: {
    width: '100%'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = { 
      path: path, 
      params: params
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
  }

  renderPartsGrid() {
    const { type } = this.state.params 
    return <GridView type={ type }/>
  }

  renderBuildRig() {
    return <BuildView/>
  }

  renderView() {
    switch (this.state.path) {
      case 'build':
        return this.renderBuildRig()
      case 'parts':
        return this.renderPartsGrid()
      default:
        return this.renderPartsGrid()
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <NavBar/>
        {this.renderView()}
      </div>
    )
  }
}