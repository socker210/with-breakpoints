const pkg = require('./package.json')

module.exports = {
  title: pkg.name,
  description: pkg.description,
  base: `/${pkg.name}/`,
  dest: 'docs',
  host: '0.0.0.0',
  port: 3003,
  menu: [
    'Getting started',
    'Examples'
  ]
}