import React, { Component } from 'react'
import parseHash from './util/hash'
import GridView from './views/grid-view'
import BuildView from './views/build-view'
import BuildCompleteView from './views/build-complete-view'
import NavBar from './components/nav-bar'

const styles = {
  root: {
    width: '100vw'
  },
  stretch: {
    marginTop: '-1%'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = { 
      path: path, 
      params: params,
      build: null
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      this.setState({ path, params })
    })
  }
  
  handleBuild = (build) => {
    this.setState({ build: build })
  }

  renderPartsGrid() {
    const { type } = this.state.params 
    return <GridView type={ type }/>
  }

  renderBuildRig() {
    return <BuildView build={this.handleBuild}/>
  }

  renderBuildComplete() {
    return <BuildCompleteView parts={this.state.build}/>
  }

  renderView() {
    switch (this.state.path) {
      case 'build':
        return this.renderBuildRig()
      case 'buildcomplete':
        return this.renderBuildComplete()
      case 'parts':
        return this.renderPartsGrid()
      default:
        return this.renderPartsGrid()
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <div style={styles.stretch}>
          <NavBar />
        </div>
        {this.renderView()}
      </div>
    )
  }
}