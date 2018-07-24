import React, { Component } from 'react'
import parseHash from './util/hash'
import PartsGrid from './components/parts-grid'
import PartFilter from './components/part-filter'

export default class App extends Component {
  constructor(props) {
    super(props)
    const { path, params } = parseHash(window.location.hash)
    this.state = { 
      path: path, 
      params: params, 
      parts: []
    }
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('/computer-parts', req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data }))
      .catch(err => console.error(err))

    window.addEventListener('hashchange', () => {
      const { path, params } = parseHash(window.location.hash)
      console.log(parseHash(window.location.hash))
      this.setState({ path, params })
    })
  }

  render() {
    const { type } = this.state.params
    const { parts } = this.state
    const filteredParts = type 
      ? parts.filter(part => part.type === type)
      : parts
    return (
      <div className="container">
        <div className="row">
            <PartFilter activeType={this.state.params.type}></PartFilter>
            <PartsGrid parts={ filteredParts }></PartsGrid>
        </div>
      </div>
    )
  }
}