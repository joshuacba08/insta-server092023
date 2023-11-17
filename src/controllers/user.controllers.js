// importo response de express para tener autocompletado
const { response } = require("express");

// importo mi modelo de usuario
const User = require("../models/User");

const bcrypt = require("bcryptjs");

// importo mi función de encriptación
const encryptPassword = require("../utils/bcrypt");

// creo mi controlador de usuarios
const createUser = async (req, resp = response) => {
  try {
    // TODO: Encriptar la contraseña
    const password = await encryptPassword(req.body.password);
    req.body.password = password; // reemplazo la contraseña por la encriptada

    const newUser = await User.create(req.body);

    // elimar el password
    newUser.password = undefined;

    return resp.status(201).json({
      ok: true,
      data: newUser,
      message: "Usuario creado correctamente",
    });
  } catch (err) {
    console.log(err);
    return resp.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

const loginUser = async (req, resp = response) => {
  try {

    // 1. Verificar si el usuario existe
    const user = await User.findOne({ email: req.body.email });

    // si el usuario  no existe, user será null
    if (!user) {
      return resp.status(400).json({
        ok: false,
        message: "Usuario o contraseña incorrectos",
      });
    }

    // 2. Verificar si la contraseña es correcta
    // req.body.password es la contraseña que viene en el body de la petición

    // comparar la contraseña que viene en el body con la contraseña que está en la base de datos

    const passwordIsValid = await bcrypt.compare(req.body.password, user.password);

    if(!passwordIsValid){
      return resp.status(400).json({
        ok: false,
        message: "Usuario o contraseña incorrectos",
      });
    }

    // 3. TODO: Generar el token


    // eliminar el password
    user.password = undefined;

    return resp.status(200).json({
      ok: true,
      data: user,
      message: "Usuario logueado correctamente",
    });




  } catch (err) {
    console.log(err);
    return resp.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

module.exports = {
  createUser,
    loginUser
};
