const jwt = require("jsonwebtoken");

const validateToken = async (tokenLocal, res) => {
  try {
    const validate = await jwt.verify(tokenLocal, process.env.SECRET_KEY, (err, payload) => {
      if (err) throw { msg: "Token no válido", err };
      return payload;
    });
    return validate;
  } catch (error) {
    throw { msg: "Algo inesperado ha ocurrido", error };
  }
};

module.exports = { validateToken };
