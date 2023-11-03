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