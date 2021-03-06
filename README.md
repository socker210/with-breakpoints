# with-breakpoints

[![npm version](https://img.shields.io/npm/v/with-breakpoints.svg)](https://www.npmjs.com/package/with-breakpoints)
[![npm download per month](https://img.shields.io/npm/dm/with-breakpoints.svg)](https://www.npmjs.com/package/with-breakpoints)
[![dependencies Status](https://david-dm.org/socker210/with-breakpoints/status.svg)](https://david-dm.org/socker210/with-breakpoints)
[![Travis CI](https://travis-ci.com/socker210/with-breakpoints.svg?branch=master)](https://travis-ci.com/socker210/with-breakpoints)

A react component that used for use css mediaquery as you know.

This component is created using [*window.matchMedia*](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) that can show the information at a resolution that matches a particular media query.
Also, you can receive props the matches status of the mediaquery set by HOC component.


## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)
* [Example](#example)
* [License](#license)


## Installation
Install with npm:  
```
npm install with-breakpoints
```

Install with yarn:
```
yarn add with-breakpoints
```

Using a UMD:
```javascript
<script src="https://unpkg.com/with-breakpoints/dist/umd/with-breakpoints.js"></script>
<script src="https://unpkg.com/with-breakpoints/dist/umd/with-breakpoints.min.js"></script>
```
> Notice: You must include [react](https://reactjs.org/docs/cdn-links.html), [react-dom](https://reactjs.org/docs/cdn-links.html), [prop-types](https://cdnjs.com/libraries/prop-types) if you are using a UMD


## Usage
You can use like other react component or HOC.

### Using a react component
Basic usage
```javascript
import Breakpoint from 'with-breakpoints'

const Component = (props) => (
  <Breakpoint mq='screen and (max-width: 767px)'>
    Hello world!
  </Breakpoint>
)
```

Render child with function
```javascript
import Breakpoint from 'with-breakpoints'

const Component = (props) => (
  <Breakpoint mq='screen and (max-width: 767px)'>
    {(matches) => {
      return matches ? 'Hello world!' : 'Not matches'
    }}
  </Breakpoint>
)
```

Server side rendering
```javascript
import Breakpoint from 'with-breakpoints'

const Component = (props) => (
  <Breakpoint
    mq='screen and (max-width: 767px)'
    defaultMatches={true}
  >
    Hello world!
  </Breakpoint>
)
```
> Notice: defaultMatches only can used at node. Browser will be ignored.

### Using a HOC
Basic usage
```javascript
import { withBreakpoints } from 'with-breakpoints'

const Component = ({ pc, mobile }) => (
  pc ? 'Hello pc!' : mobile ? 'Hello mobile!' : null
)

const mqs = [
  { name: 'pc', mq: 'screen and (min-width: 768px)' },
  { name: 'mobile', mq: 'screen and (max-width: 767px)' }
]

export default withBreakpoints(mqs)(Component)
```

Server side rendering
```javascript
import { withBreakpoints } from 'with-breakpoints'

const Component = ({ pc, mobile }) => (
  pc ? 'Hello pc!' : mobile ? 'Hello mobile!' : null
)

const mqs = [
  { name: 'pc', mq: 'screen and (min-width: 768px)', defaultMatches: true },
  { name: 'mobile', mq: 'screen and (max-width: 767px)', defaultMatches: false }
]

export default withBreakpoints(mqs)(Component)
```
> Notice: defaultMatches only can used at node. Browser will be ignored.


## Props
Below components's `mq` props is used be [json2mq](https://github.com/akiran/json2mq). Therefore, you can pass the mqs as an object or array.

### Breakpoint
| Props          | Type                  | Default | Required | Description                                                       |
|----------------|-----------------------|---------|----------|-------------------------------------------------------------------|
| mq             | `string,object,array` | `all`   | `false`  | CSS mediaqueries                                                  |
| defaultMatches | `bool`                | `true`  | `false`  | Default match for server side rendering (Browser will be ignored) |
| onChange       | `func`                |         | `false`  | onChange event (This function will get 'matches' argument)        |

### withBreakpoints
| Props          | Type                  | Default | Required | Description                                                       |
|----------------|-----------------------|---------|----------|-------------------------------------------------------------------|
| name           | `true`                |         | `true`   | The name of props                                                 |
| mq             | `string,object,array` | `all`   | `false`  | CSS mediaqueries                                                  |
| defaultMatches | `bool`                | `true`  | `false`  | Default match for server side rendering (Browser will be ignored) |
> This component is HOC. Therefore, you can pass the props via function argument like a react-redux's `connect`.  
> The argument that [mqs](#using-a-hoc) must be an array and its elements must be an object.


## Example
You can see the example at [here](https://socker210.github.io/with-breakpoints/)


## License
MIT [&copy; socker210](https://github.com/socker210/with-breakpoints/blob/develop/LICENSE.md)
