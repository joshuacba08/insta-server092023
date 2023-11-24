// importamos la librería jsonwebtoken
const jwt = require('jsonwebtoken');

// creamos una función para generar el token
const generateToken = (payload) => {
    // generamos el token con el método sign, el cual recibe el payload, la clave secreta y el tiempo de expiración
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
    // retornamos el token
    return token;
}

// creamos una función para verificar el token
const verifyToken = (token) => {
    // verificamos el token con el método verify, el cual recibe el token y la clave secreta
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // retornamos el token decodificado
    return decoded;
}


// exportamos las funciones
module.exports = {
    generateToken,
    verifyToken
}