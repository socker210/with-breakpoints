import React from 'react'
import Breakpoint from '../../src'

export default () => (
  <div>
    <div>Device Test!</div>
    <Breakpoint mq={{ minDeviceWidth: 1224 }}>
      <div>You are a desktop or laptop</div>
      <Breakpoint mq={{ minDeviceWidth: 1824 }}>
        <div>You also have a huge screen</div>
      </Breakpoint>
      <Breakpoint mq={{ maxWidth: 1224 }}>
        <div>You are sized like a tablet or mobile phone though</div>
      </Breakpoint>
    </Breakpoint>
    <Breakpoint mq={{ maxDeviceWidth: 1224 }}>
      You are a tablet or mobile phone
    </Breakpoint>
    <Breakpoint mq={{ orientation: 'portrait' }}>
      <div>You are portrait</div>
    </Breakpoint>
    <Breakpoint mq={{ orientation: 'landscape' }}>
      <div>You are landscape</div>
    </Breakpoint>
    <Breakpoint mq={{ minResolution: '2dppx' }}>
      <div>You are retina</div>
    </Breakpoint>
  </div>
)