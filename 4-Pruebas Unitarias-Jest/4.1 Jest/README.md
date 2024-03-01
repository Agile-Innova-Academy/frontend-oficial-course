# Pruebas Unitarias en React con Jest 🧪🚀

## ¿Qué es Jest?
Jest es un marco de pruebas desarrollado por Facebook para JavaScript, especialmente diseñado para proyectos basados en React. Proporciona una sintaxis simple y potente para escribir pruebas unitarias.

## Características Principales 🌟
`Fácil Configuración: `Jest se configura con mínimos esfuerzos, permitiéndote comenzar rápidamente.

`Sintaxis Clara y Concisa:` Las pruebas escritas en Jest son legibles y expresivas, gracias a una sintaxis intuitiva.

`Velocidad Relámpago:` Jest utiliza una estrategia de ejecución paralela inteligente para acelerar las pruebas.

`Mocking Integrado:` Proporciona herramientas incorporadas para el mocking que facilitan simular el comportamiento de funciones y objetos.

### Configuración inicial
Antes de comenzar, asegúrate de tener Jest instalado en tu proyecto. Puedes hacerlo ejecutando:

    npm install --save-dev jest

## Estructura del Proyecto 📁
Organiza tu proyecto de la siguiente manera:

    |-- src
    |   |-- components
    |       |-- MiComponente.js
    |-- tests
    |   |-- MiComponente.test.js
    |-- package.json

### Primeras Pruebas 👩‍💻
Crea un archivo de prueba para tu componente, por ejemplo, MiComponente.test.js. Jest buscará automáticamente archivos con la extensión .test.js.

    // MiComponente.test.js
    import React from 'react';
    import { render } from '@testing-library/react';
    import MiComponente from '../src/components/MiComponente';

    test('renders MiComponente without crashing', () => {
    render(<MiComponente />);
    });

### Corriendo las Pruebas 🏃‍♀️
Agrega el siguiente script en tu archivo package.json:

        "scripts": {
        "test": "jest"
        }

Luego, ejecuta tus pruebas con:

    npm test

`Assertions y Matchers ✅`
Jest ofrece una variedad de assertions y matchers para verificar resultados. Por ejemplo:

    test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
    });

`Mocking 🃏`
Jest facilita el mocking para simular funciones y objetos.

        // Mocking a function
        const mockFunction = jest.fn();
        mockFunction();
        expect(mockFunction).toHaveBeenCalled();

        // Mocking an object
        const mockObject = {
        method: jest.fn(() => 'mocked result'),
        };
        expect(mockObject.method()).toBe('mocked result');

¡Listo! Ahora estás equipado para realizar pruebas unitarias en React con Jest. 


`Conclusión 🎉`
Jest no solo es una herramienta poderosa para pruebas, ¡también agrega un toque de diversión al proceso! Intégralo en tu proyecto y disfruta de un desarrollo más confiable y entretenido. ¡Feliz testing! 🚀




