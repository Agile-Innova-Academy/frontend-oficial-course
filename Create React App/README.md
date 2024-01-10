# Creando un Programa Increíble con React y React Router DOM 🚀🌐
¡Hola, desarrollador Agile en ascenso! 👋 Hoy nos sumergiremos en el emocionante mundo de React y React Router DOM, para construir juntos un programa increíble. 🏗️✨

## Paso 1: Configurar tu Entorno de Desarrollo 🛠️
Antes de comenzar, asegúrate de tener Node.js instalado. Luego, crea tu aplicación React utilizando create-react-app:
``` 
npx create-react-app mi-programa-increible
cd mi-programa-increible
``` 
## Paso 2: Instalar React Router DOM 🌐
Vamos a instalar React Router DOM para manejar la navegación en nuestra aplicación:
``` 
npm install react-router-dom
``` 
 ## Paso 3: Estructurar tu Aplicación 🏗️
Organiza tus archivos de la siguiente manera:
``` 
    src
    |-- components
    |   |-- PaginaInicio.js
    |   |-- PaginaAcercaDe.js
    |   |-- PaginaContacto.js    
    |-- App.js
    |-- index.js
``` 
 ## Paso 4: Configurar React Router DOM 🚪
Abre App.js y configura las rutas usando React Router DOM:
``` 
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PaginaInicio from './components/PaginaInicio';
import PaginaAcercaDe from './components/PaginaAcercaDe';
import PaginaContacto from './components/PaginaContacto';

function App() {
  return (
    <Router>
      <div>
        {/* Navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/acerca-de">Acerca de</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        {/* Rutas */}
        <Route path="/" exact component={PaginaInicio} />
        <Route path="/acerca-de" component={PaginaAcercaDe} />
        <Route path="/contacto" component={PaginaContacto} />
      </div>
    </Router>
  );
}
export default App;
``` 
 ## Paso 5: Crea tus Páginas 📄
En cada componente dentro de la carpeta components, puedes crear las páginas correspondientes (PaginaInicio.js, PaginaAcercaDe.js, PaginaContacto.js). Añade contenido único a cada página.

 ## Paso 6: Ejecutar tu Programa 🚀
Guarda todo y ejecuta tu aplicación:
``` 
npm start
``` 
¡Abre tu navegador y ve a http://localhost:3000 para ver tu programa increíble en acción!

- [Crear Aplicación de React](https://create-react-app.dev/docs/getting-started)