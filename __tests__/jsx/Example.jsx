import React from 'react'
import { render } from 'react-dom'
import { withBreakpoints } from '../../src'

// eslint-disable-next-line react/prop-types
const Component = ({ pc, mobile }) => (
  <div id='component'>
    { pc ? 'pc' : mobile ? 'mobile' : null }
  </div>
)

function renderWithBreakpoints (mqs, container) {
  const HOC = withBreakpoints(mqs)(Component)

  return render(<HOC />, container)
}

window.renderWithBreakpoints = renderWithBreakpoints