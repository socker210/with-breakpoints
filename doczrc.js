const path = require('path')

module.exports = {
  title: 'with-breakponts',
  description: 'CSS media queries in react, for build a responsive design as you want',
  indexHtml: path.resolve(__dirname, 'docz', 'index.html'),
  base: '/with-breakpoints/',
  dest: 'docs',
  host: '0.0.0.0',
  port: 3003,
  hashRouter: true,
  menu: [
    'Getting started',
    'Examples'
  ]
}