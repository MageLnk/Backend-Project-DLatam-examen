const jwt = require("jsonwebtoken");
//
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

const validateUserData = (req, res, next) => {
  try {
    const userData = req.body;
    // ESTO DE ABAJO NO HACE LO QUE SE SUPONE QUE TIENE QUE HACER
    if (!Object.keys(userData).length === 0) {
      res.status(401).send({ msg: "Tiene que enviar información para cambiar" });
      return;
    }

    const validProperties = ["email", "address_user", "phone", "name", "last_name", "username"];
    const keys = Object.keys(userData);
    const isValid = keys.every((key) => validProperties.includes(key));
    if (!isValid) {
      res.status(401).send({ msg: `Uno de los parámetros no corresponde` });
      return;
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

const validateUserPassword = (req, res, next) => {
  try {
    const userData = req.body;
    // ESTO DE ABAJO NO HACE LO QUE SE SUPONE QUE TIENE QUE HACER
    if (!Object.keys(userData).length === 0) {
      res.status(401).send({ msg: "Tiene que enviar una contraseña para cambiar" });
      return;
    }

    const validProperties = ["password"];
    const keys = Object.keys(userData);
    const isValid = keys.every((key) => validProperties.includes(key));
    if (!isValid) {
      res.status(401).send({ msg: `El parámetro de contraseña no corresponde` });
      return;
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

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

module.exports = { adminVerification, tokenVerification, validateUserData, validateUserPassword, morganHechizo };
