# Usando un ORM (Mongoose)

## Introducción

En esta clase veremos como configurar Mongoose para usarlo como ORM de MongoDB en nuestra API REST.

## ¿Qué es un ORM?

Un ORM (Object Relational Mapping) es una técnica de programación que permite relacionar una base de datos relacional con un lenguaje de programación orientado a objetos. En este caso, Mongoose nos permite relacionar MongoDB con JavaScript.

## Instalación

Para instalar Mongoose, ejecutamos el siguiente comando:

```bash
npm install mongoose
```

## Documentación

La documentación de Mongoose está disponible en [https://mongoosejs.com/](https://mongoosejs.com/).

## Configuración

Para configurar Mongoose, debemos crear un archivo `mongoose.js` en la carpeta `config` con el siguiente contenido:

###### Config/mongoose.js

```js
// importo mongoose
const mongoose = require('mongoose');
// me traigo el string conection de la variable de entorno
const mongoURI = process.env.MONGO_URI; 

// me conecto a la base de datos usando una función Async/Await
const connectDB = async () => { // vamos a convertir esta funcion en una funcion asincrona
    try { // try para ejecutar el código asincrono
        await mongoose.connect(mongoURI);
        console.log('Conectado a la base de datos')
    } catch (error) { // catch para capturar el error
        console.log('Error en conexión',error);
    }
}

// exporto la función
module.exports = connectDB;
```

###### Index.js

```js
// 1. Importamos la librería de express
const express = require('express');

// 2. Creamos una instancia de express
const app = express(); // app es una instancia de express

// configuración de dotenv (variables de entorno)
require('dotenv').config()

// Importamos la conexión a la base de datos y ejecutamos la función
const connectDB = require('./src/config/mongoose')
connectDB();

// Convertir el json del body en un objeto de javascript
app.use(express.json()); // Middleware

// app es un objeto que tiene métodos, uno de ellos es get el cual recibe dos parámetros (ruta, callback)
// * un callback es una función que se pasa por parámetro a otra función.

// 3. Definimos una ruta y un callback (http://localhost:8080/)
app.get('/', (req, res)=>{
    res.send('<h1 style="color:white; background-color:#000000">Hola mundo!!</h1>');
});

app.post('/auth/register', (req, res)=>{

    console.log(req.body)

    res.send(req.body);
})

app.post('/auth/login', (req, res)=>{

    console.log(req.body)

    res.send(req.body);
});

const PORT = 8080; // PORT será una constante que contendrá el número de puerto en el que va a escuchar el servidor

// 4. Definimos el puerto en el que va a escuchar el servidor
app.listen( PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})


```

### Variables de entorno

En el ejemplo anterior vemos como estamos accediendo a la variable de entorno `MONGO_URI` para obtener la URL de conexión a la base de datos. Esto nos permite configurar la base de datos de forma dinámica, dependiendo del entorno en el que estemos trabajando.

Pero, ¿qué es una variable de entorno? - Una variable de entorno es una variable cuyo valor se establece fuera del programa, generalmente a través del sistema operativo o del shell en el que se ejecuta el programa. En nuestro caso, vamos a usar variables de entorno para configurar la base de datos de forma dinámica, dependiendo del entorno en el que estemos trabajando. De esta forma, también protegemos la información sensible de nuestra aplicación.

#### ¿Cómo puedo acceder a las variables de entorno?

Para acceder a las variables de entorno, debemos usar la variable global `process.env`. Por ejemplo, para acceder a la variable de entorno `MONGO_URI`, debemos usar `process.env.MONGO_URI`.

Para ello será necesario instalar el paquete `dotenv`:

```bash
npm install dotenv
```

Una vez instalado, vamos a configurar dotenv en el archivo `index.js`:

```js
require("dotenv").config();
```
