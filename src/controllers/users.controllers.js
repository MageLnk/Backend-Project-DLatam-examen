const jwt = require("jsonwebtoken");
// Config
const { config } = require("../config/config");
// Services
const { createNewUserService, userLogInService, getUserDataService } = require("../services/users.services");
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
    const { username, email } = cleanInfo;
    const token = jwt.sign({ username, email }, config.jwtSecret);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.bringUserDataTestController = async (req, res) => {
  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    const data = jwt.decode(token);
    const userData = await getUserDataService(data);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
