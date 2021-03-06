import React from 'react'
import PropTypes from 'prop-types'
import json2mq from 'json2mq'
import matchMedia from './matchMedia'

class Breakpoint extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      mm: undefined,
      matches: undefined
    }

    this.updateMatches = this.updateMatches.bind(this)
  }

  componentWillMount () {
    const { mq, defaultMatches } = this.props
    const mm = matchMedia(typeof mq === 'string' ? mq : json2mq(mq))

    mm.addListener(this.updateMatches)

    this.setState({
      mm: mm.getMediaQueryList(),
      matches: mm.getMatches(defaultMatches)
    })
  }

  componentWillUnmount () {
    this._unmount = true

    this.state.mm.removeListener(this.updateMatches)
  }

  updateMatches ({ matches }) {
    if (this._unmount) return

    this.setState({ matches }, () => {
      if (typeof this.props.onChange === 'function') this.props.onChange(matches)
    })
  }

  render () {
    const { matches } = this.state
    const { children } = this.props

    if (typeof children === 'function') return children(matches)

    return matches ? children || null : null
  }
}

Breakpoint.defaultProps = {
  mq: 'all',
  defaultMatches: true
}

Breakpoint.propTypes = {
  mq: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  onChange: PropTypes.func,
  defaultMatches: PropTypes.bool
}

export default Breakpoint