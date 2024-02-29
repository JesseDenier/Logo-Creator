// Loads the npm inquirer and file system packages into this javascript.
const inquirer = require("inquirer");
const fs = require("fs");

// Loads the inquirer max length package into the javascript and sets the type name.
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxLength", MaxLengthInputPrompt);

// TODO: Describe and Complete Function.
function createText(answers) {}

// TODO: Describe and Complete Function.
function setTextColor(answers) {}

// TODO: Describe and Complete Function.
function createShape(answers) {}

// TODO: Describe and Complete Function.
function setShapeColor(answers) {}

// TODO: Describe and Complete Function.
function createLogo(answers) {}

// Asks the user for choices regarding logo creation and then runs all logo creation functions.
function init() {
  inquirer
    .prompt([
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
          "What color would you like the text to be? Enter hexadecimal number or keyword.",
      },
      {
        name: "shape",
        message: "What shape would you like the logo to be?",
        type: "list",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        name: "shapeColor",
        message:
          "What color would you like the shape to be? Enter hexadecimal number or keyword.",
      },
    ])
    .then((answers) => {
      createText(answers);
      setTextColor(answers);
      createShape(answers);
      setShapeColor(answers);
      createLogo(answers);
      console.log("Generated logo.svg");
    });
}

init();
