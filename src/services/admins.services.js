const bcrypt = require("bcryptjs");
// DB's
const {
  models: { User, Color },
} = require("../models");
//

const admins = {};

admins.createNewUserService = async ({ username, email, password }) => {
  try {
    const hashPass = bcrypt.hashSync(password);
    const type = "admin";
    const newUser = await User.create({ username, email, password: hashPass, type });
    return newUser.get({ raw: true });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") throw "El email ya está registrado";
    throw { Msg: "Otro error misterior", error };
  }
};

admins.userLogInService = async ({ email, password }) => {
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

admins.getUserDataService = async ({ email }) => {
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

admins.updateUserDataService = async ({ email }, newData) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    await lookingForUser.update(newData);
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") throw "El email ya está registrado";
    throw { Msg: "Otro error misterior", error };
  }
};

admins.updateUserPassword = async ({ email }, newPassword) => {
  try {
    const lookingForUser = await User.findOne({ where: { email: email } });
    if (!lookingForUser) throw "El email no está registrado";
    const hashPassNewPassword = bcrypt.hashSync(newPassword);
    await lookingForUser.update({ password: hashPassNewPassword });
  } catch (error) {
    throw { Msg: "Otro error misterior", error };
  }
};

// Add new stuff

admins.addNewColorService = async ({ name }) => {
  try {
    const newColor = await Color.create({ name_color: name });
    return newColor.get({ raw: true });
  } catch (error) {
    throw error;
  }
};

// Delete stuff

admins.deleteColorService = async ({ id_color }) => {
  try {
    const deletedColor = await Color.destroy({ where: { id_color } });
    if (deletedColor === 0) throw `El color con el ID ${id_color} que está intentando borrar, no existe`;
    return `El color de id '${id_color}' fue borrado con éxito`;
  } catch (error) {
    throw error;
  }
};

module.exports = admins;
