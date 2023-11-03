// importo mongoose
const mongoose = require('mongoose');

// creo el esquema de usuario

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        trim: true // trim es para que no se guarden espacios en blanco al principio y al final
    },
    lastName:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true // unique es para que no se repita el email
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        required: true,
        trim: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE'], // enum es para que solo se puedan guardar estos dos valores
        default: 'USER_ROLE' // valor por defecto
    },
    image:{
        type: String,
        trim: true
    },
}, {timestamps: true}); // timestamps es para que se cree la fecha de creación y la fecha de actualización


// creo el modelo de usuario
const User = mongoose.model('User', userSchema);

// exporto el modelo
module.exports = User;