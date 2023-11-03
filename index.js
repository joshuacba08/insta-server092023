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

