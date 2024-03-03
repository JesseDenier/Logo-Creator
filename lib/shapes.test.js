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

  test("all three parameters of circle should accurately be placed on render.", () => {
    const a = new Circle("Red", "ABC", "Blue");
    expect(a.render()).toEqual(`
      <svg width="300" height="200">
        <circle cx="150" cy="100" r="75" fill="Red" />
        <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="Blue">ABC</text>
      </svg>`);
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

  test("all three parameters of triangle should accurately be placed on render.", () => {
    const a = new Triangle("Red", "ABC", "Blue");
    expect(a.render()).toEqual(`
      <svg width="300" height="200">
        <polygon points="150,37.5 225,162.5 75,162.5" fill="Red"/>
        <text x="50%" y="64%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="Blue">ABC</text>
      </svg>`);
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

  test("all three parameters of square should accurately be placed on render.", () => {
    const a = new Square("Red", "ABC", "Blue");
    expect(a.render()).toEqual(`
      <svg width="300" height="200">
        <rect x="75" y="25" width="150" height="150" fill="Red" />
        <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="Blue">ABC</text>
      </svg>`);
  });
});
