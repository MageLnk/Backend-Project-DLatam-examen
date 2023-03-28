const { bringAllProductsController } = require("./products.controllers");
const { bringAllProductsService } = require("../services/products.services");

jest.mock("../services/products.services");

describe("Given products controllers", () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("It should return a 200 status code and a success message if the products were found successfully", async () => {
    // Arrange
    const productsData = [
      { id: 1, name: "Test 1" },
      { id: 2, name: "Test 2" },
    ];
    bringAllProductsService.mockResolvedValueOnce(productsData);

    // Act
    await bringAllProductsController(req, res);

    // Assert
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith({ status: "All good", results: productsData });
  });
});
