// configuración de dotenv (variables de entorno)
require('dotenv').config()

// 1. Importamos la librería de express
const express = require('express');

// 2. Creamos una instancia de express
const app = express(); // app es una instancia de express

// Importamos la conexión a la base de datos y ejecutamos la función
const connectDB = require('./src/config/mongoose')
connectDB();

// Convertir el json del body en un objeto de javascript
app.use(express.json()); // Middleware

// app es un objeto que tiene métodos, uno de ellos es get el cual recibe dos parámetros (ruta, callback)
// * un callback es una función que se pasa por parámetro a otra función.

// 3. Definimos las rutas de nuestra aplicación de forma agrupada
app.use('/api/v1/users', require('./src/routes/user.routes'))

const PORT = 8080; // PORT será una constante que contendrá el número de puerto en el que va a escuchar el servidor

// 4. Definimos el puerto en el que va a escuchar el servidor
app.listen( PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})

