'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/cjs/with-breakpoints.min.js')
} else {
  module.exports = require('./dist/cjs/with-breakpoints.js')
}