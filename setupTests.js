const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
require('babel-polyfill')

configure({ adapter: new Adapter() })