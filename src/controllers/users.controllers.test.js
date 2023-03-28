const { createNewUserController, loginUserController } = require("./users.controllers");
const { createNewUserService, userLogInService } = require("../services/users.services");
const jwt = require("jsonwebtoken");

jest.mock("../services/users.services");
jest.mock("jsonwebtoken");

describe("Give users Controllers", () => {
  let req, res;
  beforeEach(() => {
    req = {
      body: {
        email: "supertest@example.com",
        password: "password123",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });
  test("should return a 200 status code and a success message if the user was created successfully", async () => {
    // Arrange
    const userInfo = req.body;

    // Act
    createNewUserService.mockResolvedValueOnce(userInfo);
    await createNewUserController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ msg: `El usuario de correo ${userInfo.email} ha creado con éxito` });
  });

  test("It should return a 500 status code and an error message if an error occurs while creating the user", async () => {
    // Arrange
    const error = new Error("Database connection failed");

    // Act
    createNewUserService.mockRejectedValueOnce(error);
    await createNewUserController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ msg: error });
  });

  //
  test("It should return a 200 status code with a valid token if the user logs in successfully", async () => {
    // Arrange
    const cleanInfo = {
      email: "supertest@example.com",
      password: "password123",
      type: "user",
    };
    const token = "valid-token";

    // Act
    userLogInService.mockResolvedValueOnce(cleanInfo);
    jwt.sign.mockReturnValueOnce(token);
    await loginUserController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(token);
  });

  test("It should return a 500 status code with an error message if the user provides 'La contraseña es incorrecta'", async () => {
    // Arrange
    const error = new Error("La contraseña es incorrecta");

    // Act
    userLogInService.mockRejectedValueOnce(error);
    await loginUserController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ msg: error.message });
  });

  //
});
