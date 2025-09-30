const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://hipertextual.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,        // Timeout para la mayoría de los comandos
    pageLoadTimeout: 30000,             // Timeout para cargar la página
    requestTimeout: 10000,              // Timeout para requests XHR/AJAX
    responseTimeout: 30000,             // Timeout para respuestas de red
    execTimeout: 60000,                 // Timeout para comandos del sistema
    taskTimeout: 60000,                 // Timeout para tareas personalizadas
    viewportWidth: 1280,
    viewportHeight: 720,
  },
})
