import React, { Component } from 'react'
import parseHash from './util/hash'
import GridView from './views/grid-view'

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
    const { navigate, handleCard } = this
    const { type } = this.state.params 
    return <GridView type={ type } navigate={ navigate } card={ handleCard }/>
  }

  renderView() {
    switch (this.state.path) {
      default:
        return this.renderPartsGrid()
    }
  }

  render() {
    return this.renderView()
  }
}