const { Shape, Circle, Triangle, Square } = require("./shapes");

describe("Shape", () => {
  test("new shapes should be an instance of Shape class", () => {
    const a = new Shape();
    expect(a).toBeInstanceOf(Shape);
  });

  test("the first parameter of shape should set shapeColor properly.", () => {
    const b = "Red";
    const a = new Shape(b);
    expect(a.shapeColor).toBe(b);
  });

  test("the second parameter of shape should set userText properly.", () => {
    const b = "ABC";
    const a = new Shape("Red", b);
    expect(a.userText).toBe(b);
  });

  test("the third parameter of shape should set textColor properly.", () => {
    const b = "Blue";
    const a = new Shape("Red", "ABC", b);
    expect(a.textColor).toBe(b);
  });
});

describe("Circle", () => {
  test("new circles should be an instance of Circle class", () => {
    const a = new Circle();
    expect(a).toBeInstanceOf(Circle);
  });

  test("the first parameter of circle should set shapeColor properly.", () => {
    const b = "Red";
    const a = new Circle(b);
    expect(a.shapeColor).toBe(b);
  });

  test("the second parameter of circle should set userText properly.", () => {
    const b = "ABC";
    const a = new Circle("Red", b);
    expect(a.userText).toBe(b);
  });

  test("the third parameter of circle should set textColor properly.", () => {
    const b = "Blue";
    const a = new Circle("Red", "ABC", b);
    expect(a.textColor).toBe(b);
  });
});

describe("Triangle", () => {
  test("new triangles should be an instance of Circle class", () => {
    const a = new Triangle();
    expect(a).toBeInstanceOf(Triangle);
  });

  test("the first parameter of triangle should set shapeColor properly.", () => {
    const b = "Red";
    const a = new Triangle(b);
    expect(a.shapeColor).toBe(b);
  });

  test("the second parameter of triangle should set userText properly.", () => {
    const b = "ABC";
    const a = new Triangle("Red", b);
    expect(a.userText).toBe(b);
  });

  test("the third parameter of triangle should set textColor properly.", () => {
    const b = "Blue";
    const a = new Triangle("Red", "ABC", b);
    expect(a.textColor).toBe(b);
  });
});

describe("Square", () => {
  test("new squares should be an instance of Circle class", () => {
    const a = new Square();
    expect(a).toBeInstanceOf(Square);
  });

  test("the first parameter of square should set shapeColor properly.", () => {
    const b = "Red";
    const a = new Square(b);
    expect(a.shapeColor).toBe(b);
  });

  test("the second parameter of square should set userText properly.", () => {
    const b = "ABC";
    const a = new Square("Red", b);
    expect(a.userText).toBe(b);
  });

  test("the third parameter of square should set textColor properly.", () => {
    const b = "Blue";
    const a = new Square("Red", "ABC", b);
    expect(a.textColor).toBe(b);
  });
});
