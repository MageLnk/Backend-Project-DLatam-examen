const jwt = require("jsonwebtoken");
const { adminVerification } = require("./adminVerification");

describe("Given adminVerification function", () => {
  let req;
  let res;
  let next;
  const secretKey = "TestSecretKey";
  beforeEach(() => {
    req = {
      headers: {},
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("It should return 403 if authorization header is missing", async () => {
    await adminVerification(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith({ msg: "Acceso no autorizado" });
  });

  test("It should return 401 if token is missing", async () => {
    req.headers.authorization = "Bearer ";
    await adminVerification(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ msg: "Se necesita un token para continuar" });
  });

  test("It should return 403 if token is not for an admin", async () => {
    const token = jwt.sign({ type: "user" }, secretKey);
    req.headers.authorization = `Bearer ${token}`;
    await adminVerification(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith({ msg: "Ud no tiene acceso al servicio secreto" });
  });

  test("It should call next if token is for an admin", async () => {
    const token = jwt.sign({ type: "admin" }, secretKey);
    req.headers.authorization = `Bearer ${token}`;
    await adminVerification(req, res, next);
    expect(next).toHaveBeenCalled();
  });
});
