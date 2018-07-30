import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import BuildParts from './build-parts'
import ResetButton from './reset-button'
import BuildButtons from './build-buttons'
import CurrentBuild from './build-current'

function getSteps() {
  return [
    'Select a Processor',
    'Select a Motherboard',
    'Select Memory(RAM)',
    'Select a Video Card',
    'Select a Case',
    'Select a Power Supply',
    'Select a CPU Cooler',
    'Select Storage'
  ]
}

const partType = [
  'processor',
  'motherboard',
  'memory',
  'videocard',
  'case',
  'powersupply',
  'cooling',
  'storage'
]

const initialState = {
  activeStep: 0,
  added: false,
  currentBuild: false,
  build: null,
  parts: []
}

export default class BuildWizard extends Component {
  constructor(props) {
    super(props)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleAddPart = this.handleAddPart.bind(this)
    this.handleShowBuild = this.handleShowBuild.bind(this)
    this.state = {
      activeStep: 0,
      added: false,
      showCurrentBuild: false,
      build: null,
      parts: []
    }
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('computer-parts/processor', req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data }))
      .catch(err => console.error(err))
  }

  setPart(build, part) {
    return {
      ...build,
      [part.type]: part
    }
  }

  handleNext() {
    const { activeStep, build } = this.state
    if (activeStep === 7) {
      this.props.build(build)
    }
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('computer-parts/' + partType[activeStep + 1], req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data, activeStep: activeStep + 1, added: false }))
      .catch(err => console.error(err))
  }

  handleBack() {
    const { activeStep } = this.state
    this.setState({ activeStep: activeStep - 1 })
  }

  handleReset() {
    this.setState(initialState)
  }

  handleAddPart(number) {
    const { parts, build } = this.state
    const part = parts.find(part => part.productId === number)
    this.setState({ build: this.setPart(build, part), added: true })
  }
  handleShowBuild() {
    const { showCurrentBuild } = this.state
    this.setState({ showCurrentBuild: !showCurrentBuild})
  }

  render() {
    const { activeStep, parts, build, added, showCurrentBuild } = this.state
    const steps = getSteps()
    const disabled = (added) ? false : true
    return (
      <div>
        <CurrentBuild open={ showCurrentBuild } build={ build } onClose={ this.handleShowBuild }/>
        <Stepper activeStep={ activeStep } alternativeLabel>
          { steps.map(label => {
            return (
              <Step key={ label }>
                <StepLabel>{ label }</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length 
            ? <ResetButton onClick={ this.handleReset }/>
            : <BuildButtons 
                activeStep={ activeStep } 
                onBack={ this.handleBack } 
                onNext={ this.handleNext }
                disabled={ disabled }
                steps={ steps }
                showBuild={ this.handleShowBuild } />
          }
        </div>
        <BuildParts parts={parts} added={added} onAdd={this.handleAddPart} />
      </div>
    )
  }
}