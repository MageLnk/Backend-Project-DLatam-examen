const jwt = require("jsonwebtoken");
// App
const adminVerification = async (req, res, next) => {
  try {
    if (!req.headers.authorization) return res.status(403).send({ msg: "Acceso no autorizado" });
    const token = req.headers.authorization.split("Bearer ")[1];

    if (!token) {
      res.status(401).send({ msg: "Se necesita un token para continuar" });
      return;
    }

    const { type } = jwt.decode(token);
    if (type !== "admin" || !type) return res.status(403).send({ msg: "Ud no tiene acceso al servicio secreto" });

    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = { adminVerification };
