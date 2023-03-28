const controller = require("../controllers/users.controllers");
const { createNewUserService } = require("../services/users.services");

jest.mock("../services/users.services");

describe("Given adminUsers controllers", () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        email: "test@example.com",
        password: "password123",
        authorization: "secret",
      },
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    process.env.PASSWORD_ADMIN_AUTHORIZATION = "secret";
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("It should create a new user and return a 200 status code with a success message", async () => {
    // Arrange
    const userInfo = req.body;
    createNewUserService.mockResolvedValueOnce(userInfo);

    // Act
    await controller.createNewUserController(req, res);

    // Assert
    expect(createNewUserService).toHaveBeenCalledWith(userInfo);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({
      msg: `El usuario de correo ${userInfo.email} ha creado con éxito`,
    });
  });

  test("It should return a 500 status code and an error message if an error occurs", async () => {
    // Arrange
    const error = new Error("Database connection failed");
    createNewUserService.mockRejectedValueOnce(error);

    // Act
    await controller.createNewUserController(req, res);

    // Assert
    expect(createNewUserService).toHaveBeenCalledWith(req.body);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith({ msg: error });
  });
});
