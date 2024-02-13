# Firebase: Plataforma Mágica para Desarrolladores ✨

Es como una caja mágica 🎁 que te ayuda a hacer cosas geniales en tus aplicaciones. 🌟 Es como tener un amigo súper poderoso que te ayuda con muchas cosas.

`Firebase de Google` es una plataforma en la nube para el desarrollo de aplicaciones web y móvil. Está disponible para distintas plataformas (iOS, Android y web), con lo que es más rápido trabajar en el desarrollo.

Aunque fue creada en 2011 pasó a ser parte de Google en 2014, comenzando como una base de datos en tiempo real. Sin embargo, se añadieron más y más funciones que, en parte, permitieron agrupar los SDK de productos de Google con distintos fines, facilitando su uso.

## 🏠 Descripción:

Firebase es como una casa para tus datos y tu aplicación. Puedes guardar cosas importantes allí, como nombres, fotos y mensajes. Es como tener una casa segura para tus juguetes favoritos. 🏡

## 🔥 Para qué lo uso:

Sus herramientas son variadas y de fácil uso, considerando que su agrupación simplifica las tareas de gestión a una misma plataforma. Las finalidades de las mismas se pueden encontrar desarrollo, crecimiento, monetización y análisis.

`Guardar Cosas (Firestore)  💾:` Guardo información importante como si fueran tesoros en una caja fuerte. 💰 Guarda tus datos importantes como tesoros en una caja fuerte. ¡Aquí es donde almacenas y recuperas toda la información necesaria!

Una de las herramientas más destacadas y esenciales de Firebase son las bases de datos en tiempo real. Estas se alojan en la nube, son No SQL y almacenan los datos como JSON. Permiten alojar y disponer de los datos e información de la aplicación en tiempo real, manteniéndolos actualizados aunque el usuario no realice ninguna acción.

`Autenticación (Authentication):` Firebase me ayuda a asegurarme de que solo mis amigos puedan entrar a jugar en mi aplicación. 🔒 Asegúrate de que solo tus amigos (usuarios autorizados) puedan entrar a jugar en tu aplicación. ¡La llave maestra para la seguridad!

Firebase ofrece un sistema de autenticación que permite tanto el registro propiamente dicho (mediante email y contraseña) como el acceso utilizando perfiles de otras plataformas externas (por ejemplo, de Facebook, Google o Twitter), una alternativa muy cómoda para usuarios reacios a completar el proceso.

`Enviar Mensajes (Cloud Messaging):` 📬 Envía mensajes mágicos a tus usuarios para mantenerlos al tanto de lo que está sucediendo. ¡Como enviar cartas por lechuzas en el mundo digital!
Su utilidad es el envío de notificaciones y mensajes a diversos usuarios en tiempo real y a través de varias plataformas.

`Hacer Magia en Tiempo Real (Realtime Database):` Haz magia en tiempo real, jugando y actualizando información al instante. ¡Conéctate con tus amigos como si estuvieran en la misma sala!🧙‍♂️

`Hacer Páginas Web (Hosting):` Firebase me ayuda a mostrar mis cosas bonitas en internet, como tener mi propio escenario para mostrar mis obras maestras. 🎨 Muestra tus creaciones al mundo. Firebase te da un escenario propio en internet para exhibir tus obras maestras. ¡Tu propia galería virtual!

Entonces, Firebase es como mi varita mágica 🪄 para hacer cosas asombrosas en mis aplicaciones. ¡Es como tener superpoderes para construir y mostrar cosas increíbles en el mundo digital! 🚀✨

# Primeros Pasos con Firebase - Redux

Conectar Firebase a un proyecto de Redux es una excelente manera de gestionar el estado de tu aplicación y trabajar con datos en tiempo real.
Aquí hay una guía simple para ayudarte a hacer la conexión:

### `Instala las Dependencias:`

Asegúrate de tener instaladas las dependencias necesarias. Puedes hacer esto ejecutando los siguientes comandos en tu terminal:

    npm install redux react-redux redux-thunk firebase

`redux:` Para gestionar el estado de la aplicación.
`react-redux:` Para conectar React con Redux.
`redux-thunk:` Para manejar acciones asíncronas.
`firebase:` La biblioteca oficial de Firebase.

### Configura Firebase:

`Configura Firebase en tu aplicación`. Puedes hacerlo importando y configurando Firebase en un archivo, por ejemplo, 

firebase.js:

    import firebase from 'firebase/app';
    import 'firebase/firestore'; // Importa los servicios que necesites (Firestore, Authentication, etc.)

    const firebaseConfig = {
    // Configuración de tu proyecto Firebase
    };

    firebase.initializeApp(firebaseConfig);

    export const firestore = firebase.firestore();

`Configura Redux:` Configura tu store de Redux. Puedes tener un archivo

store.js:

    import { createStore, applyMiddleware } from 'redux';
    import thunk from 'redux-thunk';
    import rootReducer from './reducers'; // Asegúrate de tener tus reducers en este archivo

    const store = createStore(rootReducer, applyMiddleware(thunk));

    export default store;

`Integra Firebase con Redux:`

Crea acciones para interactuar con Firebase. Usa redux-thunk para manejar operaciones asíncronas. Por ejemplo, en 

actions.js:

import { firestore } from '../firebase';

    export const fetchTodos = () => async (dispatch) => {
    const todosRef = firestore.collection('todos');
    const snapshot = await todosRef.get();
    const todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    dispatch({ type: 'FETCH_TODOS', payload: todos });
    };

`Conecta Redux con React:`

Conecta tu aplicación React con Redux en tu componente principal, generalmente en index.js o App.js:

    import React from 'react';
    import ReactDOM from 'react-dom';
    import { Provider } from 'react-redux';
    import store from './store';
    import App from './App';

    ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
    );

`Usa Datos de Firebase en Componentes:`

En tus componentes, usa las acciones de Redux para interactuar con Firebase. Por ejemplo, para obtener datos en un componente:

    import React, { useEffect } from 'react';
    import { useDispatch, useSelector } from 'react-redux';
    import { fetchTodos } from './actions';

    const TodoList = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
    dispatch(fetchTodos());
    }, [dispatch]);

    return (
    <ul>
    {todos.map((todo) => (
    <li key={todo.id}>{todo.text}</li>
    ))}
    </ul>
    );
    };

    export default TodoList;


¡Y eso es básicamente todo! Ahora tu aplicación de React con Redux está conectada a Firebase, permitiéndote gestionar el estado de manera efectiva y trabajar con datos en tiempo real. ¡Buena suerte! 🚀


### compose(...functions)
Combina funciones de derecha a izquierda.

Esta es una utilidad de programación funcional y es incluida en Redux por conveniencia. Probablemente la quieras usar para aplicar múltiples potenciadores de store en serie.

## Argumentos
(argumentos): Las funciones a combinar. Se espera que cada función acepte un único parámetro. El valor de devuelva va a ser usado como argumento a la función que este a su izquierda, y así. La única excepción es la que esté más a la derecha la cual puede recibir múltiples argumentos.
Regresa
(Función): La función final obtenido de combinas las funciones indicadas de derecha a izquierda.

`Ejemplo`
Este ejemplo demuestra como usar compose para potenciar el store con applyMiddleware y algunas pocas herramientas de desarrollo de redux-devtools.

        import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
        import thunk from 'redux-thunk'
        import DevTools from './containers/DevTools'
        import reducer from '../reducers/index'

        const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            DevTools.instrument()
        )
        )

`Consejos`
Todo lo que compose hace es permitirte escribir funciones transformadoras anidades fácilmente. ¡No le des mucho crédito!

# applyMiddleware(...middlewares)
Los middleware son la forma sugerida de extender Redux con funcionalidades personalizadas. Los middlewares te dajan envolver el método dispatch del Store. La característica principal de los middlewares es que son combinables. Multiples middlewares se pueden combinarjunto, donde ninguno necesita saber cual vino antes o viene después.

El uso más común de los middlewares es soportar acciones asíncronas sin demasiado código o dependiendo de librerías como Rx. Logre eso gracias a que te permite despachar acciones asíncronas además de las normales.

Por ejemplo, `redux-thunk `permite a los creadores de acciones invertír el control despachando funciones. Van a recibir dispatch como argumento y capaz llamarlo asíncronamente. Estas funciones son llamadas thunks. Otro ejemplo de middleware es redux-promise. Este te deja despachar una Promesa como una acción asíncrona, y despachar una acción normal cuando la Promesa se resuelve.

`Los middlewares `no vienen incluidos en createStore y no son una parte fundamental de la arquitectua de Redux, pero los consideramos suficientemente útiles para soportarlos directamente. De esta forma, hay una única forma estandarizada de extender dispatch y diferentes middlewares probablemente compitan en expresividad y utilidad.

- [Firebase Documentación](https://firebase.google.com/docs?gad_source=1&gclid=Cj0KCQiAw6yuBhDrARIsACf94RVeJZcx20NpyqcbR2R4U-4I6e1L4o_S0A853G-k8TJE7WGoiXYs3LUaApeyEALw_wcB&gclsrc=aw.ds&hl=es-419)

-[Firebase Consola](https://console.firebase.google.com/)
