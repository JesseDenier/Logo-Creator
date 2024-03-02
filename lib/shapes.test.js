const Shape = require("./shapes");
const Circle = require("./shapes");
const Triangle = require("./shapes");
const Square = require("./shapes");

describe("Shape", () => {
  test("Shape contains 3 values within its construction.", () => {
    const result = ValidateColor("Apple");
    expect(result).toEqual(false);
  });
});
