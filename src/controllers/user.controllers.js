// importo response de express para tener autocompletado
const { response } = require('express');

// importo mi modelo de usuario
const User = require('../models/User');


// creo mi controlador de usuarios
const createUser = async (req, resp = response) => {
    try{

        // TODO: Encriptar la contraseña

        const newUser = await User.create(req.body) 

        // elimar el password
        newUser.password = undefined;

        return resp.status(201).json({
            ok: true,
            data: newUser,
            message: 'Usuario creado correctamente'
        })

    }catch(err){
        console.log(err);
        return resp.status(500).json({
            ok: false,
            message: 'Error interno del servidor'
        })
    }
};

module.exports = {
    createUser
}

