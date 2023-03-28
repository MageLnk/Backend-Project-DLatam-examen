const createNewUserController = require("../controllers/users.controllers").createNewUserController;
const createNewUserService = require("../services/users.services").createNewUserService;
const loginUserController = require("../controllers/users.controllers").loginUserController;
const userLogInService = require("../services/users.services").userLogInService;

const jwt = require("jsonwebtoken");

jest.mock("../services/users.services");
jest.mock("jsonwebtoken");

describe("Give users Controllers", () => {
  test("It should return a 200 status code and a success message if the user was created successfully", async () => {
    const userInfo = {
      email: "supertest@example.com",
      password: "password123",
    };
    const req = {
      body: userInfo,
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    createNewUserService.mockResolvedValueOnce(userInfo);
    await createNewUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ msg: `El usuario de correo ${userInfo.email} ha creado con éxito` });
  });

  test("It should return a 500 status code and an error message if an error occurs while creating the user", async () => {
    const userInfo = {
      email: "supertest@example.com",
      password: "password123",
    };
    const req = {
      body: userInfo,
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    const error = new Error("Database connection failed");
    createNewUserService.mockRejectedValueOnce(error);
    await createNewUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ msg: error });
  });

  //
  test("It should return a 200 status code with a valid token if the user logs in successfully", async () => {
    const userInfo = {
      email: "supertest@example.com",
      password: "password123",
    };
    const cleanInfo = {
      email: "supertest@example.com",
      password: "password123",
      type: "user",
    };
    const token = "valid-token";
    const req = {
      body: userInfo,
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    userLogInService.mockResolvedValueOnce(cleanInfo);
    jwt.sign.mockReturnValueOnce(token);
    await loginUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(token);
  });

  test("It should return a 401 status code with an error message if the user provides 'La contraseña es incorrecta'", async () => {
    const userInfo = {
      email: "supertest@example.com",
      password: "password123",
    };

    const error = new Error("La contraseña es incorrecta");
    const req = {
      body: userInfo,
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    userLogInService.mockRejectedValueOnce(error);
    await loginUserController(req, res);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ msg: error.message });
  });
});
