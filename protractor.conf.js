exports.config = {
  specs: ['app/**/*.e2e.js'],
  baseUrl: 'http://localhost:9000',
  rootElement: 'html',
  chromeOnly: false,

  multiCapabilities: [{
    'browserName': 'chrome'
  }, {
    'browserName': 'firefox'
  }, {
    'browserName': 'safari'
  }],
}