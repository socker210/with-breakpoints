import React from 'react'
import { render } from 'react-dom'
import { withBreakpoint } from '../../src'

// eslint-disable-next-line react/prop-types
const Component = ({ pc, mobile }) => (
  <div id='component'>
    { pc ? 'pc' : mobile ? 'mobile' : null }
  </div>
)

function renderWithBreakpoint (mqs, container) {
  const HOC = withBreakpoint(mqs)(Component)

  return render(<HOC />, container)
}

window.renderWithBreakpoint = renderWithBreakpoint