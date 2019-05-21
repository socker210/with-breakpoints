import React from 'react'
import MatchMediaquery from 'matchmediaquery'
import json2mq from 'json2mq'

export function withBreakpoint (Component, mqs) {
  if (!Object.keys(mqs || {}).length) {
    console.error('Cannot read mediaquery')

    return Component
  }

  class HOC extends React.Component {
    constructor (props) {
      super(props)

      this.updateMatches = this.updateMatches.bind(this)

      this.state = Object.keys(mqs)
        .reduce((container, key) => {
          const mq = typeof mqs[key] === 'string' ? mqs[key] : json2mq(mqs[key])
          const mm = MatchMediaquery(mq)
          const listener = ({ matches }) => this.updateMatches(key, matches)

          mm.addListener(listener)

          container[key] = {
            matches: mm.matches,
            removeListener: () => mm.removeListener(listener)
          }

          return container
        }, {})
    }

    componentWillUnmount () {
      this._unmount = true

      Object.keys(this.state)
        .map(key => this.state[key].removeListener())
    }

    updateMatches (key, matches) {
      if (this._unmount) return

      this.setState({
        [key]: Object.assign(this.state[key], { matches })
      })
    }

    getProps () {
      const props = {
        ...this.props
      }

      Object.keys(this.state)
        .map(key => props[key] = this.state[key].matches)

      return props
    }

    render () {
      const props = this.getProps()

      return <Component {...props} />
    }
  }

  return HOC
}