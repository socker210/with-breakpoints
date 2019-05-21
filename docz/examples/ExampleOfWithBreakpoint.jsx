import React from 'react'
import PropTypes from 'prop-types'
import { withBreakpoint } from '../../src'

class ExampleOfWithBreakpoint extends React.Component {
  render () {
    const { pc, mobile, text } = this.props

    return (
      <>
        <h1>{text}</h1>
        <h1>PC: {pc ? 'True' : 'False'}</h1>
        <h1>Mobile: {mobile ? 'True' : 'False'}</h1>
      </>
    )
  }
}

ExampleOfWithBreakpoint.propTypes = {
  pc: PropTypes.bool,
  mobile: PropTypes.bool,
  text: PropTypes.string
}

export default withBreakpoint(ExampleOfWithBreakpoint, {
  pc: 'screen and (min-width: 769px)',
  mobile: 'screen and (max-width: 768px)'
})