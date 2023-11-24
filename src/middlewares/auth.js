// importamos nuestra función de verificación de token
const { verifyToken } = require("../utils/jwt");

// creamos nuestro middleware
const auth = (req, resp, next) => {
  // obtenemos el token de la cabecera de la petición
  const token = req.header("Authorization");

  // si no existe el token, retornamos un error
  if (!token) {
    return resp.status(401).json({
      ok: false,
      message: "No se ha provisto un token de autenticación",
    });
  }

  // si existe el token, lo verificamos
  try {
    // verificamos el token
    const decoded = verifyToken(token);

    // si el token es válido, almacenamos el usuario en la petición
    req.user = decoded;

    // llamamos a la función next para que se ejecute el controlador
    next();
    
  } catch (err) {
    // si el token no es válido, retornamos un error
    return resp.status(401).json({
      ok: false,
      message: "Token inválido",
    });
  }
};

// exportamos el middleware
module.exports = auth;