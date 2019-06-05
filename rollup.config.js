const commonjs = require('rollup-plugin-commonjs')
const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify').uglify
const pkg = require('./package.json')

const input = 'src/index.js'

const cjs = [
  {
    input: input,
    output: { file: `dist/cjs/${pkg.name}.js`, format: 'cjs', exports: 'named' },
    external: ['react', 'prop-types'],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs({ include: 'node_modules/**' })
    ]
  },
  {
    input: 'src/index.js',
    output: { file: `dist/cjs/${pkg.name}.min.js`, format: 'cjs', exports: 'named' },
    external: ['react', 'prop-types'],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs({ include: 'node_modules/**' }),
      uglify()
    ]
  }
]

const esm = [
  {
    input: input,
    output: { file: `dist/esm/${pkg.name}.js`, format: 'esm', exports: 'named' },
    external: ['react', 'prop-types'],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs({ include: 'node_modules/**' })
    ]
  }
]

const umd = [
  {
    input: input,
    output: {
      file: `dist/umd/${pkg.name}.js`,
      format: 'umd',
      exports: 'named',
      name: 'withBreakpoints',
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes'
      }
    },
    external: ['react', 'prop-types'],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs({ include: 'node_modules/**' })
    ]
  },
  {
    input: input,
    output: {
      file: `dist/umd/${pkg.name}.min.js`,
      format: 'umd',
      exports: 'named',
      name: 'withBreakpoints',
      globals: {
        'react': 'React',
        'prop-types': 'PropTypes'
      }
    },
    external: ['react', 'prop-types'],
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      resolve({ extensions: ['.js', '.jsx'] }),
      commonjs({ include: 'node_modules/**' }),
      uglify()
    ]
  }
]

module.exports = [
  ...cjs,
  ...esm,
  ...umd
]