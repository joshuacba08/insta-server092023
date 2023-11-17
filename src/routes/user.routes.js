// importo express
const express = require('express');
// importo mi controlador de usuarios
const { createUser, loginUser } = require('../controllers/user.controllers');
// creo un router a partir de express
const router = express.Router();

// creo mi ruta
// http://localhost:8080/api/v1/users/register
router.post('/register', createUser);

// http://localhost:8080/api/v1/users/login
router.post('/login', loginUser);

// exporto el router para utilizarlo en otros archivos
module.exports = router;