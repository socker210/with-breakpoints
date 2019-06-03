import React from 'react'
import { render } from 'react-dom'
import Breakpoint, { withBreakpoint } from '.'

const ExampleOfBreakpoint = () => (
  <>
    <Breakpoint mq='screen and (min-width: 768px)'>
      <h3>Screen size bigger than 767</h3>
    </Breakpoint>
    <Breakpoint mq='screen and (max-width: 767px)'>
      <h3>Screen size smaller than 768</h3>
    </Breakpoint>
  </>
)

/* eslint-disable react/prop-types */
const ExampleOfWithBreakpoint = ({ pc, mobile }) => (
  <>
    { pc ? 'PC' : mobile ? 'Mobile' : null }
  </>
)

const mqs = [
  { name: 'pc', mq: 'screen and (min-width: 768px)' },
  { name: 'mobile', mq: 'screen and (max-width: 767px)' }
]
const HOC = withBreakpoint(mqs)(ExampleOfWithBreakpoint)

const App = () => (
  <>
    <h1>Breakpoint</h1>
    <ExampleOfBreakpoint />
    <br /><br /><br />
    <h1>withBreakpoint</h1>
    <HOC />
  </>
)

const container = document.getElementById('react-root')

render(<App />, container)