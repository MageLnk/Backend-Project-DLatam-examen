const jwt = require("jsonwebtoken");

const validateToken = async (tokenLocal, res) => {
  try {
    const validate = await jwt.verify(tokenLocal, process.env.JWT_SECRET_WORD, (err, payload) => {
      if (err) throw "Token ignresado no es válido";
      return payload;
    });
    return validate;
  } catch (error) {
    throw error;
  }
};

module.exports = { validateToken };
