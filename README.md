# Hipertextual Cypress Test Automation

Este proyecto contiene pruebas automatizadas para el sitio web de Hipertextual (https://hipertextual.com) utilizando Cypress.

## Descripción

El proyecto implementa el patrón de diseño Page Object Model (POM) para crear pruebas automatizadas mantenibles y escalables. Las pruebas incluyen funcionalidades como:

- Búsqueda de artículos
- Navegación por el sitio
- Suscripción al newsletter
- Manejo de iframes y elementos dinámicos

## Estructura del Proyecto

```
cypress/
├── e2e/
│   ├── pages/
│   │   └── HomePage.js    # Page Object para la página principal
│   └── tests/
│       └── home.spec.js   # Pruebas de la página principal
├── fixtures/
│   └── testData.json      # Datos de prueba
└── support/
    ├── commands.js        # Comandos personalizados de Cypress
    └── e2e.js            # Configuración global de pruebas
```

## Prerrequisitos

- Node.js (versión 14 o superior)
- npm (Node Package Manager)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/Gabriel120497/-hipertextual-cypress-test.git
cd -hipertextual-cypress-test
```

2. Instalar dependencias:
```bash
npm install
```

## Ejecución de Pruebas

Para ejecutar las pruebas en modo headless:
```bash
npm test
```

Para abrir el Test Runner de Cypress:
```bash
npm run cypress:open
```

## Características Implementadas

- **Page Object Model**: Separación clara entre la lógica de pruebas y los selectores de elementos
- **Manejo de iframes**: Implementación robusta para interactuar con elementos dentro de iframes
- **Generación de datos dinámicos**: Utilidades para generar datos de prueba aleatorios
- **Interceptación de peticiones**: Manejo de peticiones de red para pruebas más estables
- **Scroll y navegación**: Implementación de navegación fluida por la página

## Configuraciones Personalizadas

El proyecto incluye configuraciones especiales para:
- Manejo de timeouts extendidos para elementos dinámicos
- Bypass de errores de seguridad del navegador
- Manejo de cookies y estado de JavaScript
- Configuraciones específicas para iframes

## Contribuir

1. Crear un fork del repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Contacto

Gabriel Mejia - [GitHub](https://github.com/Gabriel120497)

Link del proyecto: [https://github.com/Gabriel120497/-hipertextual-cypress-test](https://github.com/Gabriel120497/-hipertextual-cypress-test)
