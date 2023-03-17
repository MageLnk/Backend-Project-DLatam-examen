const bcrypt = require("bcryptjs");
// DB's
const {
  models: { User },
} = require("../models");
//

const users = {};

users.createNewUser = async ({ email, password, type = "usuario" }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const newUser = await User.create({ email, password: hashPass, type });
    return newUser.get({ raw: true });
  } catch (error) {
    throw { error };
  }
};

users.checkUserInfoForLogIn = async ({ email, password }) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const cleanInfo = lookingForUser.get({ raw: true });
    const { password: passSaved } = cleanInfo;
    const checkPassword = bcrypt.compareSync(password, passSaved);
    if (!checkPassword) throw "La contraseña es incorrecta";
  } catch (error) {
    throw error;
  }
};

users.getUserData = async (email) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const cleanInfo = lookingForUser.get({ raw: true });
    return {
      email: cleanInfo.email,
      rol: cleanInfo.rol,
      lenguage: cleanInfo.lenguage,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = users;
