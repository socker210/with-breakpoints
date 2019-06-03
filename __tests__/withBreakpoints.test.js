import React from 'react'
import { shallow, mount } from 'enzyme'
import { withBreakpoints } from '../src'

// eslint-disable-next-line react/prop-types
const Component = ({ pc, mobile, tablet }) => (
  <div id='container'>
    { pc ? 'pc' : mobile ? 'mobile' : tablet ? 'tablet' : null }
  </div>
)

describe('withBreakpoints', () => {
  describe('Validate mediaquery', () => {
    it('pass normal value', () => {
      const mqs = [
        { name: 'pc', mq: 'screen and (min-width: 768px)', defaultMatches: false },
        { name: 'tablet', mq: 'screen and (max-width: 767px)', defaultMatches: false },
        { name: 'mobile', mq: 'screen and (max-width: 468px)', defaultMatches: true }
      ]
      const HOC = withBreakpoints(mqs)(Component)
      const wrapper = shallow(<HOC />)

      expect(wrapper.getElement(0)).toEqual(<Component pc={false} tablet={false} mobile />)
    })

    it('pass empty mqs, expect child\'s props is empty', () => {
      const HOC = withBreakpoints([])(Component)
      const wrapper = shallow(<HOC />)

      expect(wrapper.getElement()).toEqual(<Component />)
    })

    it('pass invalid type of mqs, expect occured error', () => {
      expect(() => withBreakpoints(undefined)(Component))
        .toThrow('Invalid type of \'mqs\': must be an array')
    })

    it('pass invalid type of mqs\'s element, expect occured error', () => {
      const wrongMqs = [
        { name: 'pc', mq: 'all' },
        'wrong value'
      ]

      expect(() => withBreakpoints(wrongMqs)(Component))
        .toThrow('Invalid type of \'mqs\'\'s element: must be an object')
    })

    it('pass mqs without name property, expect occured error', () => {
      const wrongMqs = [{ mq: 'all' }]

      expect(() => withBreakpoints(wrongMqs)(Component))
        .toThrow('Cannot read property \'name\'')
    })
  })

  describe('SSR', () => {
    it('pass defaultMatches is true, expect render \'mobile\'', () => {
      const mqs = [
        { name: 'mobile', mq: 'screen and (min-width: 801px)', defaultMatches: false },
        { name: 'mobile', mq: 'screen and (max-width: 800px)', defaultMatches: true }
      ]
      const HOC = withBreakpoints(mqs)(Component)
      const wrapper = mount(<HOC />)

      expect(wrapper.children().find('#container').text()).toEqual('mobile')
    })

    it('pass all of defaultMatches is false, expect render null', () => {
      const mqs = [
        { name: 'pc', mq: 'screen and (min-width: 801px)', defaultMatches: false },
        { name: 'mobile', mq: 'screen and (max-width: 800px)', defaultMatches: false }
      ]
      const HOC = withBreakpoints(mqs)(Component)
      const wrapper = mount(<HOC />)

      expect(wrapper.children().find('#container').text()).toEqual('')
    })
  })
})