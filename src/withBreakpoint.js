import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import json2mq from 'json2mq'
import matchMedia from './matchMedia'

const isSSR = typeof window === 'undefined' || typeof window.matchMedia === 'undefined'
const requiredKeys = ['name']

function validateMq (mq) {
  if (typeof mq !== 'object') throw new Error('Invalid type of \'mqs\'\'s element: must be an object')

  const providedKeys = Object.keys(mq)
  const nonProvidedKeys = requiredKeys.filter(key => providedKeys.indexOf(key) === -1)

  return [
    !nonProvidedKeys.length,
    nonProvidedKeys
  ]
}

function createHOC (WrappedComponent, mqs) {
  class HOC extends React.Component {
    constructor (props) {
      super(props)

      const state = {}

      mqs.map(mq => {
        const name = mq.name
        const query = mq.mq ? (typeof mq.mq === 'string' ? mq.mq : json2mq(mq)) : 'all'
        const mm = isSSR ? undefined : matchMedia(query)
        const initialMatches = isSSR ? (typeof mq.defaultMatches === 'undefined' ? true : mq.defaultMatches) : mm.matches

        state[name] = { matches: initialMatches }

        if (mm) {
          const listener = ({ matches }) => this.setState(name, matches)

          mm.addListener(listener)

          state[name].removeListener = mm.removeListener(listener)
        }
      })

      this.state = state
    }

    componentWillUnmount () {
      this._unmount = true

      Object.keys(this.state)
        .map(mq => mq.removeListener && mq.removeListener())
    }

    updateMatches (name, matches) {
      const state = Object.assign({}, this.state[name], { matches })

      this.setState({ [name]: state })
    }

    getProps () {
      const state = Object.keys(this.state)
        .reduce((container, name) => {
          container[name] = this.state[name].matches

          return container
        }, {})

      return {
        ...this.props,
        ...state
      }
    }

    render () {
      const props = this.getProps()

      return React.isValidElement(WrappedComponent) ? WrappedComponent : <WrappedComponent {...props} />
    }
  }

  return HOC
}

export default mqs => WrappedComponent => {
  if (!Array.isArray(mqs)) throw new Error('Invalid type of \'mqs\': must be an array')

  mqs.map(mq => {
    const [isSuccess, nonProvidedKeys] = validateMq(mq)

    if (!isSuccess) throw new Error(`Cannot read property '${nonProvidedKeys.join(', ')}'`)
  })

  const Enhance = createHOC(WrappedComponent, mqs)

  hoistNonReactStatics(Enhance, WrappedComponent)

  return Enhance
}