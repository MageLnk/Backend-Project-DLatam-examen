const jwt = require("jsonwebtoken");
// Config
const { config } = require("../config/config");
// Services
const { createNewUser, checkUserInfoForLogIn, getUserData } = require("../services/users.services");
//
const controller = {};

controller.createNewUserController = async (req, res) => {
  try {
    const userInfo = req.body;
    const newUser = await createNewUser(userInfo);
    res.status(200).send({ msg: `El usuario de correo ${newUser.email} ha creado con éxito` });
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.loginUserController = async (req, res) => {
  try {
    const userInfo = req.body;
    await checkUserInfoForLogIn(userInfo);
    const token = jwt.sign(userInfo.email, config.jwtSecret);
    res.status(200).send(token);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

controller.bringUserDataTestController = async (req, res) => {
  try {
    const token = req.header("Authorization").split("Bearer ")[1];
    const email = jwt.decode(token);
    const userData = await getUserData(email);
    res.status(200).send(userData);
  } catch (error) {
    res.status(500).send({ msg: error });
    console.error(`Un usuario acaba de generar el error: ${error}`);
  }
};

module.exports = controller;
