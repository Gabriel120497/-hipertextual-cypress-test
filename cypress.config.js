const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hipertextual.com',
    chromeWebSecurity: false,
  },
})
