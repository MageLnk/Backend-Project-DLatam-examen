const jwt = require("jsonwebtoken");
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

const morganHechizo = (req, res, next) => {
  const parametros = req.params;
  const url = req.url;
  console.log(
    `
    Hoy ${new Date()}
    Se ha recibido una consulta en la ruta ${url}
    acompañado de los parámetros: `,
    parametros
  );
  return next();
};

module.exports = { tokenVerification, morganHechizo };
