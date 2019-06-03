const TEST_ENV = process.env.TEST_ENV
const config = {}

// Common options
config.setupFiles = [
  '<rootDir>/setupTests.js'
]

config.transform = {
  '^.+\\.jsx?$': 'babel-jest'
}

// Conditional options
if (TEST_ENV === 'unit') {
  config.testMatch = [
    '**/__tests__/**/*.(test|spec).js'
  ]

  config.snapshotSerializers = [
    'enzyme-to-json/serializer'
  ]
}

if (TEST_ENV === 'e2e') {
  config.testMatch = [
    '**/__tests__/**/*.(test|spec).e2e.js'
  ]
}

module.exports = config