/* eslint-disable no-undef */
const path = require('path')
const pkg = require('./package.json')

module.exports = {
  hashRouter: true,
  title: pkg.name,
  description: pkg.description,
  indexHtml: path.resolve(__dirname, 'docz', 'index.html'),
  dest: 'docs',
  host: '0.0.0.0',
  port: 3003,
  menu: [
    'Getting started',
    'Examples'
  ]
}