// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Ocultar las peticiones fetch/XHR del log 
const origLog = Cypress.log
Cypress.log = function (opts, ...other) {
  if (opts.displayName === 'xhr' || opts.displayName === 'fetch') {
    return
  }
  return origLog(opts, ...other)
}

// Evitar que los errores de la consola detengan las pruebas
Cypress.on('uncaught:exception', (err, runnable) => {
  // retornando false previene que Cypress from failing the test
  console.log('Error interceptado:', err.message)
  return false
})
