const validateUserData = (req, res, next) => {
  try {
    const userData = req.body;

    if (Object.keys(userData).length === 0) {
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

module.exports = { validateUserData };
