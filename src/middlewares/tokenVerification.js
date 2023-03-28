const { validateToken } = require("../utilities/validateToken");
//
const tokenVerification = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(403).send({ msg: "Acceso no autorizado" });
    const token = req.headers.authorization.split("Bearer ")[1];
    if (!token) {
      res.status(401).send({ msg: "Se necesita un token para continuar" });
      return;
    }
    await validateToken(token, res);

    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = { tokenVerification };
