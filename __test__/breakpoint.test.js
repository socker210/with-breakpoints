import React from 'react'
import { shallow } from 'enzyme'
import Breakpoint from '../src'
import mockMatchMedia from './util/mockMatchMedia'

// eslint-disable-next-line react/prop-types
const ChildComponent = ({ text }) => (<h1>{text}</h1>)

describe('<Breakpoint />', () => {
  describe('SSR', () => {
    it('passed defaultMatches as a true, expect render child', () => {
      const wrapper = shallow(
        <Breakpoint defaultMatches>
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      expect(wrapper.getElement(0)).toEqual(<ChildComponent text='Hello' />)
    })

    it('passed defaultMatches as a false, expect render null', () => {
      const wrapper = shallow(
        <Breakpoint defaultMatches={false}>
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      expect(wrapper.getElement(0)).toBeNull()
    })
  })

  describe('With matchMedia', () => {
    beforeEach(() => {
      window.matchMedia = undefined
    })

    it('matches is true, expect render child', () => {
      window.matchMedia = mockMatchMedia(true)

      const wrapper = shallow(
        <Breakpoint mq='screen and (max-width: 800px)'>
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      expect(wrapper.getElement(0)).toEqual(<ChildComponent text='Hello' />)
    })

    it('matches is false, expect render child', () => {
      window.matchMedia = mockMatchMedia(false)

      const wrapper = shallow(
        <Breakpoint mq='screen and (max-width: 800px)'>
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      expect(wrapper.getElement(0)).toBeNull()
    })

    it('passed defaultMatches as a false, will be ignored this value', () => {
      window.matchMedia = mockMatchMedia(true)

      const wrapper = shallow(
        <Breakpoint
          mq='screen and (min-width: 799px)'
          defaultMatches={false}
        >
          <ChildComponent text='will be rendered' />
        </Breakpoint>
      )

      expect(wrapper.getElement(0)).toEqual(<ChildComponent text='will be rendered' />)
    })

    it('funtional children, expect render \'No match\'', () => {
      window.matchMedia = mockMatchMedia(false)

      const wrapper = shallow(
        <Breakpoint mq='screen and (mix-width: 800px)'>
          {matches => matches ? 'Match' : 'No match'}
        </Breakpoint>
      )

      expect(wrapper.text()).toEqual('No match')
    })

    it('change matches to false, expect render null', () => {
      window.matchMedia = mockMatchMedia(true)

      const wrapper = shallow(
        <Breakpoint mq='screen and (max-width: 800px)'>
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      wrapper.state('mm').execListener({ matches: false })

      expect(wrapper.getElement(0)).toBeNull()
    })

    it('onChange', () => {
      window.matchMedia = mockMatchMedia(true)

      const fn = jest.fn()
      const wrapper = shallow(
        <Breakpoint
          mq='screen and (max-width: 800px)'
          onChange={fn}
        >
          <ChildComponent text='Hello' />
        </Breakpoint>
      )

      wrapper.state('mm').execListener({ matches: false })

      expect(fn).toHaveBeenCalled()
    })
  })
})