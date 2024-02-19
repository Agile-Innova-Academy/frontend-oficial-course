# Formik y Yup 🚀

### Formik

Formik es una biblioteca de gestión de formularios en React que facilita la tarea de manejar el estado del formulario, la validación y las interacciones del usuario.

### Yup

Yup es una librería de validación para JavaScript que se integra muy bien con Formik. Proporciona una forma sencilla y declarativa de definir esquemas de validación para tus formularios.

`Ejemplo Práctico 🌐`
Primero, asegúrate de tener instaladas las dependencias:

    npm install formik yup

Ahora, creemos un formulario de registro simple con Formik y Yup.

    import React from 'react';
    import { useFormik } from 'formik';
    import * as Yup from 'yup';

    // Esquema de validación con Yup
    const validationSchema = Yup.object({
    username: Yup.string().required('¡El nombre de usuario es obligatorio!'),
    email: Yup.string().email('¡Introduce un correo electrónico válido!').required('¡El correo electrónico es obligatorio!'),
    password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('¡La contraseña es obligatoria!'),
    });

    const RegistrationForm = () => {
    // Configuración de Formik
    const formik = useFormik({
        initialValues: {
        username: '',
        email: '',
        password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
        // Lógica para manejar la presentación de datos
        console.log('Datos enviados:', values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
        {/* Campo de nombre de usuario */}
        <label htmlFor="username">Nombre de usuario</label>
        <input
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
        />
        {formik.touched.username && formik.errors.username ? (
            <div>{formik.errors.username}</div>
        ) : null}

        {/* Campo de correo electrónico */}
        <label htmlFor="email">Correo electrónico</label>
        <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
        ) : null}

        {/* Campo de contraseña */}
        <label htmlFor="password">Contraseña</label>
        <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
        ) : null}

        {/* Botón de envío */}
        <button type="submit">Registrarse</button>
        </form>
    );
    };

    export default RegistrationForm;

En este ejemplo:

Hemos definido un esquema de validación utilizando Yup.
Utilizamos el hook useFormik para gestionar el estado del formulario y las funciones asociadas.
Creamos un formulario con campos de nombre de usuario, correo electrónico y contraseña.
Mostramos mensajes de error si la validación no se cumple.

¡Listo! Ahora puedes usar este componente RegistrationForm en tu aplicación React para manejar formularios de registro con Formik y Yup. ¡Buena suerte con tu desarrollo! 🚀

- [Formik](https://formik.org/docs/guides/validation)
- [Yup](https://www.npmjs.com/package/yup)
