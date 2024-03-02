// Loads the npm inquirer and file system packages into this javascript.
const inquirer = require("inquirer");
const fs = require("fs");

const { Shape, Circle, Triangle, Square } = require("./lib/shapes");

// Loads the inquirer max length package into the javascript and sets the type name.
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxLength", MaxLengthInputPrompt);

// Constant values for user inputs to be compared to and checked for validity.
const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
const keywordColors = require("./lib/keywordColors");

// Asks the user for choices regarding logo creation and then runs all logo creation functions.
function init() {
  inquirer
    .prompt([
      {
        name: "shape",
        message: "What shape would you like the logo to be?",
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        name: "colorSelection",
        message:
          "Do you want to pick your colors with keywords or hexadecimal values?",
        type: "list",
        choices: ["Keywords", "Hexadecimal Values"],
      },
      {
        name: "shapeColor",
        message: "What color would you like the shape to be?",
        when: (answers) => answers.colorSelection === "Keywords",
        validate: function (input) {
          if (keywordColors.includes(input.toLowerCase())) {
            return true;
          } else {
            return "Sorry that keyword doesn't work. Please enter a valid color like red, blue, seagreen, etc.";
          }
        },
      },
      {
        name: "shapeColor",
        message:
          "What color would you like the shape to be? Enter a hexadecimal value.",
        when: (answers) => answers.colorSelection === "Hexadecimal Values",
        validate: function (input) {
          if (hexRegex.test(input)) {
            return true;
          } else {
            return "Please enter a valid hexadecimal color value formatted as #XXX or #XXXXXXX";
          }
        },
      },
      {
        name: "text",
        message:
          "What text would you like on the logo? Enter up to 3 characters.",
        type: "maxLength",
        maxLength: 3,
      },
      {
        name: "textColor",
        message: "What color would you like the text to be?",
        when: (answers) => answers.colorSelection === "Keywords",
        validate: function (input) {
          if (keywordColors.includes(input.toLowerCase())) {
            return true;
          } else {
            return "Sorry that keyword doesn't work. Please enter a valid color like red, blue, seagreen, etc.";
          }
        },
      },
      {
        name: "textColor",
        message:
          "What color would you like the text to be? Enter a hexadecimal value.",
        when: (answers) => answers.colorSelection === "Hexadecimal Values",
        validate: function (input) {
          if (hexRegex.test(input)) {
            return true;
          } else {
            return "Please enter a valid hexadecimal color value formatted as #XXX or #XXXXXXX";
          }
        },
      },
    ])
    .then((answers) => {
      // Instantiate Shape based on user's choice
      let logo;
      switch (answers.shape) {
        case "Circle":
          logo = new Circle(
            answers.shapeColor,
            answers.text,
            answers.textColor
          );
          break;
        case "Triangle":
          logo = new Triangle(
            answers.shapeColor,
            answers.text,
            answers.textColor
          );
          break;
        case "Square":
          logo = new Square(
            answers.shapeColor,
            answers.text,
            answers.textColor
          );
          break;
        default:
          console.log("Invalid shape choice");
          return;
      }

      // Render the logo SVG
      const logoSVG = logo.render();

      // Save the SVG as Logo.svg
      fs.writeFile("Logo.svg", logoSVG, (err) => {
        if (err) {
          console.error("Error saving SVG:", err);
        } else {
          console.log("Logo.svg saved successfully!");
        }
      });
    });
}

init();
