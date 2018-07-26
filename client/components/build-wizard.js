import React, { Component } from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import BuildParts from './build-parts'

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
  'GPU',
  'case',
  'powersupply',
  'cooling',
  'storage'
]

const initialState = {
  activeStep: 0,
  build: {
    processor: null,
    motherboard: null,
    memory: null,
    GPU: null,
    case: null,
    powersupply: null,
    cooling: null,
    storage: null
  }
}

export default class BuildWizard extends Component {
  constructor(props) {
    super(props)
    this.handleNext = this.handleNext.bind(this)
    this.handleBack = this.handleBack.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.handleAddPart = this.handleAddPart.bind(this)
    this.state = {
      activeStep: 0,
      added: false,
      build: {
        processor: null,
        motherboard: null,
        memory: null,
        GPU: null,
        case: null,
        powersupply: null,
        cooling: null,
        storage: null
      },
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

  componentDidUpdate() {
    const { activeStep } = this.state
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('computer-parts/' + partType[activeStep], req)
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
    const { activeStep } = this.state
    this.setState({ activeStep: activeStep + 1, added: false })
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

  render() {
    const { activeStep, parts, build, added } = this.state
    const steps = getSteps()
    const disabled = (build[partType[activeStep]]) ? false : true
    return (
      <div>
        <Stepper activeStep={activeStep} alternativeLabel>
          { steps.map(label => {
            return (
              <Step key={ label }>
                <StepLabel>{ label }</StepLabel>
              </Step>
            )
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed - you&quot;re finished!</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" disabled={disabled} onClick={this.handleNext}>
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            )}
        </div>
        <BuildParts parts={parts} added={added} onAdd={this.handleAddPart} />
      </div>
    )
  }
}