const express = require("express");
const request = require("supertest");
const router = require("./");

describe("Give router routes", () => {
  test("It should set up user router", async () => {
    const userRouter = express.Router();
    userRouter.get("/", (req, res) => {
      res.send("User router working");
    });
    router.use("/user", userRouter);

    const res = await request(router).get("/user");
    expect(res.status).toEqual(200);
    expect(res.text).toEqual("User router working");
  });

  it("should set up products router", async () => {
    const productsRouter = express.Router();
    productsRouter.get("/", (req, res) => {
      res.send("Products router working");
    });
    router.use("/products", productsRouter);

    const res = await request(router).get("/products");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Products router working");
  });

  it("should set up admin users router", async () => {
    const adminUsersRouter = express.Router();
    adminUsersRouter.get("/", (req, res) => {
      res.send("Admin users router working");
    });
    router.use("/secretservice", adminUsersRouter);

    const res = await request(router).get("/secretservice");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Admin users router working");
  });

  it("should set up admin products router", async () => {
    const adminProductsRouter = express.Router();
    adminProductsRouter.get("/", (req, res) => {
      res.send("Admin products router working");
    });
    router.use("/secretoperations", adminProductsRouter);

    const res = await request(router).get("/secretoperations");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual("Admin products router working");
  });
});
