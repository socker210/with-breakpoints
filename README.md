# with-breakpoints
A react component that used for use css mediaquery as you know easily and flexible.

This component is created using [*window.matchMedia*](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) that can show the information at a resolution that matches a particular media query.
Also, you can receive props the matches status of the mediaquery set by HOC component.


## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Props](#props)
* [License](#license)


## Installation
Install with npm:  
```console
npm install with-breakpoints
```

Install with yarn:
```console
yarn add with-breakpoints
```


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
| mq             | `string|object|array` | `all`   | `false`  | CSS mediaqueries                                                  |
| defaultMatches | `bool`                | `true`  | `false`  | Default match for server side rendering (Browser will be ignored) |
| onChange       | `func`                |         | `false`  | onChange event (This function will get 'matches' argument)        |

### withBreakpoints
| Props          | Type                  | Default | Required | Description                                                       |
|----------------|-----------------------|---------|----------|-------------------------------------------------------------------|
| name           | `true`                |         | `true`   | The name of props                                                 |
| mq             | `string|object|array` | `all`   | `false`  | CSS mediaqueries                                                  |
| defaultMatches | `bool`                | `true`  | `false`  | Default match for server side rendering (Browser will be ignored) |
> This component is HOC. Therefore, you can pass the props via function argument like a react-redux's `connect`.  
> The argument that [mqs](#using-a-hoc) must be an array and its elements must be an object.


## License
MIT [&copy; socker210](https://github.com/socker210/with-breakpoints/blob/develop/LICENSE.md)