const jwt = require("jsonwebtoken");
// Config
const { config } = require("../config/config");
// Services
const {
  userLogInService,
  getUserDataService,
  updateUserPassword,
  createNewUserService,
  updateUserDataService,
} = require("../services/users.services");
//
const controller = {};

controller.createNewUserController = async (req, res) => {
  try {
    const userInfo = req.body;
    const newUser = await createNewUserService(userInfo);
    res.status(200).send({ msg: `El usuario de correo ${newUser.email} ha creado con éxito` });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.loginUserController = async (req, res) => {
  try {
    const userInfo = req.body;
    const cleanInfo = await userLogInService(userInfo);
    const { username, email, type } = cleanInfo;
    const token = jwt.sign({ username, email, type }, config.jwtSecret);
    res.status(200).send(token);
  } catch (error) {
    res.status(error.status || 500).send({ msg: error.msg || error.message });
    console.error(`Un usuario acaba de generar el error: ${JSON.stringify(error)}`);
  }
};

controller.bringUserDataController = async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const dataDecoded = jwt.decode(token);
    const userData = await getUserDataService(dataDecoded);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.updateUserData = async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const dataDecoded = jwt.decode(token);
    const dataBody = req.body;
    await updateUserDataService(dataDecoded, dataBody);
    res.status(200).send({ msg: "Sus datos han sido actualizados" });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.updatePasswordController = async (req, res) => {
  try {
    const token = req.headers.authorization.split("Bearer ")[1];
    const dataDecoded = jwt.decode(token);
    const { password } = req.body;
    await updateUserPassword(dataDecoded, password);
    res.status(200).send({ msg: "Su contraseña ha sido actualizada" });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
