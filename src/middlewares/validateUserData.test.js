const { validateUserData } = require("../middlewares/validateUserData");

describe("Given validateUserData function", () => {
  let req, res, next;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn(() => res),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("It should call next() if valid properties are provided", () => {
    req.body = {
      email: "user@example.com",
      address_user: "123 Main St",
      phone: "555-1234",
      name: "John",
      last_name: "Doe",
      username: "johndoe",
    };

    validateUserData(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  test("It should send an error response if no data is provided", () => {
    validateUserData(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ msg: "Tiene que enviar información para cambiar" });
  });

  test("It should send an error response if invalid properties are provided", () => {
    req.body = {
      email: "user@example.com",
      invalid_property: "invalid",
    };

    validateUserData(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ msg: "Uno de los parámetros no corresponde" });
  });
});
