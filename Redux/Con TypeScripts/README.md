# Aplicación Mágica con Redux y TypeScript 🌈
¡Hola constructor de maravillas! Vamos a crear una aplicación mágica utilizando Redux con TypeScript. Imagina que estamos construyendo un jardín encantado donde las criaturas mágicas guardan sus tesoros en una mochila especial. 🧚‍♂️✨

## Configuración Mágica 🔧
Antes de empezar, asegurémonos de tener nuestras herramientas mágicas instaladas. Necesitaremos Redux, React-Redux y TypeScript.

    npm install redux react-redux typescript

### `Paso 1: Crear Acciones Mágicas 📜`
Escribamos mensajes mágicos (acciones) utilizando TypeScript.

    // actions.ts
    export enum Acciones {
    AÑADIR_TESORO = 'AÑADIR_TESORO',
    }

    interface AñadirTesoroAction {
    type: Acciones.AÑADIR_TESORO;
    payload: string;
    }

    export type Accion = AñadirTesoroAction;

    export const añadirTesoro = (tesoro: string): AñadirTesoroAction => ({
    type: Acciones.AÑADIR_TESORO,
    payload: tesoro,
    });

### `Paso 2: Crear al Guardián del Tesoro (Reducer) 🗝️`
Ahora, creemos al guardián del tesoro (reducer) usando TypeScript.

    // reducer.ts
    interface Estado {
    tesoros: string[];
    }

    const estadoInicial: Estado = {
    tesoros: [],
    };

    const tesoroReducer = (state: Estado = estadoInicial, action: Accion): Estado => {
    switch (action.type) {
        case Acciones.AÑADIR_TESORO:
        return {
            ...state,
            tesoros: [...state.tesoros, action.payload],
        };
        default:
        return state;
    }
    };

    export default tesoroReducer;

### `Paso 3: Crear la Mochila Mágica (Store) 🎒`
Configuremos nuestra mochila mágica (store) y asignemos a nuestro guardián del tesoro.

    // store.ts
    import { createStore } from 'redux';
    import tesoroReducer from './reducer';

    const store = createStore(tesoroReducer);

    export default store;

### `Paso 4: Conectar React con Redux 🌉`
Construyamos un puente mágico (conector) para que React y Redux puedan jugar juntos.

    // App.tsx
    import React from 'react';
    import { useSelector, useDispatch } from 'react-redux';
    import { añadirTesoro } from './actions';

    const App: React.FC = () => {
    const tesoros = useSelector((state: any) => state.tesoros);
    const dispatch = useDispatch();

    const manejarClic = () => {
        const nuevoTesoro = obtenerTesoroAleatorio(); // ¡Un toque de magia para obtener un tesoro!
        dispatch(añadirTesoro(nuevoTesoro));
    };

    return (
        <div>
        <h1>Jardín Encantado de Tesoros 💎</h1>
        <button onClick={manejarClic}>Añadir Tesoro Mágico</button>
        <ul>
            {tesoros.map((tesoro, index) => (
            <li key={index}>{tesoro}</li>
            ))}
        </ul>
        </div>
    );
    };

    export default App;

### `Paso 5: Lanzar el Hechizo 🚀`
Finalmente, iniciemos nuestra aplicación y veamos cómo la mochila mágica de Redux con TypeScript guarda y muestra los tesoros.

    npm start

¡Y así es como has creado una aplicación mágica con Redux y TypeScript! Que tu jardín encantado siga llenándose de tesoros mágicos. 🚀🔮

- [Redux](https://redux.js.org/)