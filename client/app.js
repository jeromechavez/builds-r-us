import React, { Component } from 'react'
import PartsGrid from './components/parts-grid'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
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
  }

  render() {
    return (
      <PartsGrid parts={ this.state.parts }></PartsGrid>
    )
  }
}