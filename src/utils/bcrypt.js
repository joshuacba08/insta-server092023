const bcrypt = require('bcryptjs');

const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); // salt es un string aleatorio que se añade a la contraseña para hacerla más segura
  return await bcrypt.hash(password, salt); // Devuelve la contraseña encriptada
};

module.exports = encryptPassword;