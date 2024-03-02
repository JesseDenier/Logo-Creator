const ValidateColor = require("./validateColorFunc");

describe("ValidateColor", () => {
  test("validateColor returns false if users answer is a word but not a keyword.", () => {
    const result = ValidateColor("Apple");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer has weird spaces.", () => {
    const result = ValidateColor("  blue");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer has weird spaces.", () => {
    const result = ValidateColor("blue ");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer has non-alphanumeric characters.", () => {
    const result = ValidateColor("blue!");
    expect(result).toEqual(false);
  });

  test("validateColor returns true if users answer is a keyword regardless of case.", () => {
    const result = ValidateColor("bLuE");
    expect(result).toEqual(true);
  });

  test("validateColor returns false if users answer is a hexidecimal with no #.", () => {
    const result = ValidateColor("0000FF");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer is a hexidecimal with a number of characters other than 3 or 6", () => {
    const result = ValidateColor("#0DFF");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer is a hexidecimal with special characters.", () => {
    const result = ValidateColor("#0@0!?F");
    expect(result).toEqual(false);
  });

  test("validateColor returns true if users answer is a hexidecimal with a # regardless of case.", () => {
    const result = ValidateColor("#0d00fF");
    expect(result).toEqual(true);
  });

  test("validateColor returns false if users answer is empty.", () => {
    const result = ValidateColor("");
    expect(result).toEqual(false);
  });

  test("validateColor returns false if users answer is null.", () => {
    const result = ValidateColor(null);
    expect(result).toEqual(false);
  });
});
