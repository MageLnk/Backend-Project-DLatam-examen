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
    const validProperties = ["email", "address_user", "phone", "name", "last_name", "username"];
    const userData = req.body;
    // ESTO DE ABAJO NO HACE LO QUE SE SUPONE QUE TIENE QUE HACER
    if (!Object.keys(userData).length === 0) {
      res.status(401).send({ msg: "Tiene que enviar información para cambiar" });
      return;
    }
    const keys = Object.keys(userData);
    for (let i = 0; i < keys.length; i++) {
      if (!validProperties.includes(keys[i])) {
        res.status(401).send({ msg: `Invalid property "${keys[i]}"` });
        return;
      }
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = { tokenVerification, validateUserData, morganHechizo };
