// Dependencies
const products = require("./products.services");
const {
  models: { ProductStore },
} = require("../models");
// Mock models
jest.mock("../models", () => {
  const mockProductStore = {
    findAll: jest.fn(),
  };
  const mockProduct = {
    name_product: "test product",
    size: "L",
    category: "test category",
    price: 100,
    description: "test description",
    img_link: "https://example.com/test.jpg",
    id_product: 1,
  };
  const mockColor = {
    name_color: "test color",
  };
  const mockColorTones = {
    name_color_tone: "test color tone",
  };

  return {
    models: {
      ProductStore: mockProductStore,
      Product: mockProduct,
      Color: mockColor,
      ColorTones: mockColorTones,
    },
  };
});

describe("Given products servies", () => {
  test("It should return an array of products with their colors and color tones if the function is called successfully", async () => {
    // Arrange
    const productMock = [
      {
        stock: 10,
        product: {
          id_product: 1,
          name_product: "Test Product",
          size: "M",
          category: "Clothes",
          price: 29.99,
          description: "This is a test product",
          img_link: "https://testimage.com",
          color: {
            name_color: "Red",
            color_tones: [{ name_color_tone: "Light Red" }, { name_color_tone: "Dark Red" }],
          },
        },
      },
    ];
    const expected = [productMock];

    // Act
    ProductStore.findAll.mockResolvedValueOnce(expected);
    const result = await products.bringAllProductsService();

    // Assert
    expect(result).toEqual(expected);
    expect(ProductStore.findAll).toHaveBeenCalled();
  });

  test("It should throw an error if there is an issue with the database query", async () => {
    // Arrange
    const error = new Error("Unable to retrieve products");

    // Act
    jest.spyOn(products, "bringAllProductsService").mockRejectedValueOnce(error);

    // Assert
    await expect(products.bringAllProductsService()).rejects.toThrowError(error);
  });
});
