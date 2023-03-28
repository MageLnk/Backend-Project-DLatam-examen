const jwt = require("jsonwebtoken");
const { adminVerification } = require("./adminVerification");

describe("Given adminVerification function", () => {
  let req;
  let res;
  let next;
  const secretKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkB0ZXN0LnRlc3QiLCJ0eXBlIjoiYWRtaW4iLCJpYXQiOjE2Nzk5NjU4MDJ9.PxhWaaGeeYXLA74cV1S0yeP2u3oTnqN3iaGIggw0dsg";
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
