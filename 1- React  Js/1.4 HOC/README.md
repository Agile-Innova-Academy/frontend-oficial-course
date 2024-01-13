
# Explorando los HOC (Higher Order Components) en React 🚀
¡Bienvenido a la emocionante aventura de los Higher Order Components (HOC) en React! Los HOC son como magos en el mundo de React, proporcionando poderes adicionales a tus componentes y elevando la reutilización de la lógica. 🧙✨

## ¿Qué son los HOC? 🤔
Los HOC son funciones que toman un componente y devuelven un nuevo componente con funcionalidades adicionales. Imagina que son como capas mágicas que puedes agregar a tus componentes para mejorar su comportamiento y apariencia. 🌟🛡️

## ¿Por qué usar HOC? 🤷‍♂️🌐
Reutilización de Lógica: Permiten encapsular y reutilizar lógica común en varios componentes.

### `Composición`: 
Facilitan la construcción de componentes más complejos al componer funcionalidades específicas.
### `Mejora de la Legibilidad`:
 Hacen que tus componentes principales se centren en la presentación al separar la lógica.
### Creando un HOC 🛠️👨‍🍳
Crear un HOC es sencillo. Aquí hay un ejemplo básico de un HOC que agrega un nuevo prop nuevoProp a un componente:

```
    import React from 'react';

      const withNuevoProp = (ComponenteOriginal) => {
        return (props) => {
            return <ComponenteOriginal {...props} nuevoProp="¡Hola desde el HOC!" />;
        };
      };
```
    
// Uso del HOC
```
    const ComponenteConHOC = withNuevoProp(MiComponenteOriginal);
    Ejemplo Práctico: HOC de Autenticación 🛡️🔐
    Supongamos que deseas proteger ciertas páginas de tu aplicación y necesitas un HOC de autenticación. Aquí tienes un ejemplo:

    jsx
    Copy code
    import React, { useEffect } from 'react';
    import { useHistory } from 'react-router-dom';

    const withAutenticacion = (ComponenteProtegido) => {
    return (props) => {
        const history = useHistory();

        useEffect(() => {
        const usuarioAutenticado = /* Lógica de autenticación */ false;

        if (!usuarioAutenticado) {
            history.push('/login');
        }
        }, [history]);

        return <ComponenteProtegido {...props} />;
    };
    };
```
// Uso del HOC
```
    const ComponenteProtegido = () => {
    return <div>¡Contenido Protegido!</div>;
    };


```
``` 
    const ComponenteConAutenticacion = withAutenticacion(ComponenteProtegido);
```

### Ejemplos Comunes de HOC 🌐🎨
- withRouter: Proporciona acceso al objeto history de React Router.
- withStyles: Aplica estilos a un componente utilizando una librería de estilos.
- withRedux: Conecta un componente a un store de Redux.

### ¡Explora y Crea tus Propios Hechizos! 🧙‍♀️🔮
Los HOC ofrecen una flexibilidad increíble para mejorar y extender tus componentes. ¡Experimenta, crea tus propios HOC y haz que tu código React sea aún más mágico! 🌟

- [HOC](https://es.legacy.reactjs.org/docs/higher-order-components.html)