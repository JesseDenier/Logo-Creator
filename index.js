// Loads the npm inquirer and file system packages into this javascript.
const inquirer = require("inquirer");
const fs = require("fs");

// Links the classes and associated properties.
const { Shape, Circle, Triangle, Square } = require("./lib/shapes");

// Loads the inquirer max length package into the javascript and sets the type name.
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxLength", MaxLengthInputPrompt);

// Constant values for user inputs to be compared to and checked for validity.
const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
const keywordColors = require("./lib/keywordColors");

function validateColor(input) {
  if (keywordColors.includes(input.toLowerCase()) || hexRegex.test(input)) {
    return true;
  } else {
    return "Please enter a valid color keyword or hexadecimal value.";
  }
}

// Build shape based on user's choice.
function buildLogo(answers) {
  let logo;
  switch (answers.shape) {
    case "Circle":
      logo = new Circle(answers.shapeColor, answers.text, answers.textColor);
      break;
    case "Triangle":
      logo = new Triangle(answers.shapeColor, answers.text, answers.textColor);
      break;
    case "Square":
      logo = new Square(answers.shapeColor, answers.text, answers.textColor);
      break;
    default:
      console.log("Invalid shape choice");
      return;
  }
  const logoSVG = logo.render();
  return logoSVG;
}

// Save the SVG as Logo.svg
function saveLogo(logoSVG) {
  fs.writeFile("Logo.svg", logoSVG, (err) => {
    if (err) {
      console.error("Error saving SVG:", err);
    } else {
      console.log("Logo.svg saved successfully!");
    }
  });
}

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
        name: "shapeColor",
        message:
          "What color would you like the shape to be? Enter a keyword or hexadecimal value.",
        validate: validateColor,
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
        message:
          "What color would you like the text to be? Enter a keyword or hexadecimal value.",
        validate: validateColor,
      },
    ])
    .then((answers) => {
      logoSVG = buildLogo(answers);
      saveLogo(logoSVG);
    });
}

init();
