import React from 'react'
import { shallow } from 'enzyme'
import { withBreakpoint } from '../src'

const Hello = () => (
  <h1>Hello</h1>
)

describe('withBreakpoint', () => {
  it('render', () => {
    const Component = <h1>HAHA</h1>
    const mqs = [
      { name: 'a', mq: 'screen and (max-width: 1200px)', defaultMatches: false }
    ]

    const HOC = withBreakpoint(mqs)(Hello)
    const wrapper = shallow(<HOC />)

    expect(wrapper).toMatchSnapshot()
  })
})