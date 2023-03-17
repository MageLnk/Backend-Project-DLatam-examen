const bcrypt = require("bcryptjs");
// DB's
const {
  models: { User },
} = require("../models");
//

const users = {};

users.createNewUserService = async ({ username, email, password, type = "usuario" }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const newUser = await User.create({ username, email, password: hashPass, type });
    return newUser.get({ raw: true });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") throw "El email ya está registrado";
    throw { Msg: "Otro error misterior", error };
  }
};

users.userLogInService = async ({ email, password }) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const cleanInfo = lookingForUser.get({ raw: true });
    const { password: passSaved } = cleanInfo;
    const checkPassword = bcrypt.compareSync(password, passSaved);
    if (!checkPassword) throw "La contraseña es incorrecta";
    return cleanInfo;
  } catch (error) {
    throw error;
  }
};

users.getUserDataService = async ({ email }) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const cleanInfo = lookingForUser.get({ raw: true });

    const properties = ["email", "username", "name", "last_name", "phone", "addres_user"];
    return properties.reduce((cleaned, property) => {
      if (cleanInfo[property]) {
        cleaned[property] = cleanInfo[property];
      } else {
        cleaned[property] = "";
      }
      return cleaned;
    }, {});
  } catch (error) {
    throw error;
  }
};

users.updateUserDataService = async ({ email }, newData) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    await lookingForUser.update(newData);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") throw "El email ya está registrado";
    throw { Msg: "Otro error misterior", error };
  }
};

users.updateUserPassword = async ({ email }, newPassword) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const hashPassNewPassword = bcrypt.hashSync(newPassword);
    await lookingForUser.update({ password: hashPassNewPassword });
  } catch (error) {
    throw { Msg: "Otro error misterior", error };
  }
};

module.exports = users;
