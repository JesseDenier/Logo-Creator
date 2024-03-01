// Loads the npm inquirer and file system packages into this javascript.
const inquirer = require("inquirer");
const fs = require("fs");

// Loads the inquirer max length package into the javascript and sets the type name.
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxLength", MaxLengthInputPrompt);

// Constant values for user inputs to be compared to and checked for validity.
const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
const keywordColors = [
  `alicealue`,
  `antiquewhite`,
  `aqua`,
  `aquamarine`,
  `azure`,
  `beige`,
  `bisque`,
  `black`,
  `blanchedalmond`,
  `blue`,
  `blueviolet`,
  `brown`,
  `burlywood`,
  `cadetblue`,
  `chartreuse`,
  `chocolate`,
  `coral`,
  `cornflowerblue`,
  `cornsilk`,
  `crimson`,
  `cyan`,
  `darkblue`,
  `darkcyan`,
  `darkgoldenrod`,
  `darkgray`,
  `darkgrey`,
  `darkgreen`,
  `darkkhaki`,
  `darkmagenta`,
  `darkolivegreen`,
  `darkorange`,
  `darkorchid`,
  `darkred`,
  `darksalmon`,
  `darkseagreen`,
  `darkslateblue`,
  `darkslategray`,
  `darkslategrey`,
  `darkturquoise`,
  `darkviolet`,
  `deeppink`,
  `deepskyblue`,
  `dimgray`,
  `dimgrey`,
  `dodgerblue`,
  `firebrick`,
  `floralwhite`,
  `forestgreen`,
  `fuchsia`,
  `gainsboro`,
  `ghostwhite`,
  `gold`,
  `goldenrod`,
  `gray`,
  `grey`,
  `green`,
  `greenyellow`,
  `honeydew`,
  `hotpink`,
  `indianred`,
  `indigo`,
  `ivory`,
  `khaki`,
  `lavender`,
  `lavenderblush`,
  `lawngreen`,
  `lemonchiffon`,
  `lightblue`,
  `lightcoral`,
  `lightcyan`,
  `lightgoldenrodyellow`,
  `lightgray`,
  `lightgrey`,
  `lightgreen`,
  `lightpink`,
  `lightsalmon`,
  `lightseagreen`,
  `lightskyblue`,
  `lightslategray`,
  `lightslategrey`,
  `lightsteelblue`,
  `lightyellow`,
  `lime`,
  `limegreen`,
  `linen`,
  `magenta`,
  `maroon`,
  `mediumaquamarine`,
  `mediumblue`,
  `mediumorchid`,
  `mediumpurple`,
  `mediumseagreen`,
  `mediumslateblue`,
  `mediumspringgreen`,
  `mediumturquoise`,
  `mediumvioletred`,
  `midnightblue`,
  `mintcream`,
  `mistyrose`,
  `moccasin`,
  `navajowhite`,
  `navy`,
  `oldlace`,
  `olive`,
  `olivedrab`,
  `orange`,
  `orangered`,
  `orchid`,
  `palegoldenrod`,
  `palegreen`,
  `paleturquoise`,
  `palevioletred`,
  `papayawhip`,
  `peachpuff`,
  `peru`,
  `pink`,
  `plum`,
  `powderblue`,
  `purple`,
  `red`,
  `rosybrown`,
  `royalblue`,
  `saddlebrown`,
  `salmon`,
  `sandybrown`,
  `seagreen`,
  `seashell`,
  `sienna`,
  `silver`,
  `skyblue`,
  `slateblue`,
  `slategray`,
  `slategrey`,
  `snow`,
  `springgreen`,
  `steelblue`,
  `tan`,
  `teal`,
  `thistle`,
  `tomato`,
  `turquoise`,
  `violet`,
  `wheat`,
  `white`,
  `whitesmoke`,
  `yellow`,
  `yellowgreen`,
];

// Initially creates svgMarkup based on users choice of shape.
function createShape(answers) {
  let svgMarkup = "";
  if (answers.shape === "Circle") {
    svgMarkup = `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="75" fill="shapecolor" />
          <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="textcolor">userText</text>
        </svg>`;
  }
  if (answers.shape === "Triangle") {
    svgMarkup = `
        <svg width="300" height="200">
          <polygon points="150,37.5 225,162.5 75,162.5" fill="shapecolor"/>
          <text x="50%" y="64%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="textcolor">userText</text>
        </svg>`;
  }
  if (answers.shape === "Square") {
    svgMarkup = `
        <svg width="300" height="200">
          <rect x="75" y="25" width="150" height="150" fill="shapecolor" />
          <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="textcolor">userText</text>
        </svg>`;
  }
  return svgMarkup;
}

// Changes shape color in SVG Markup based on users choices.
function setShapeColor(svgMarkup, answers) {
  let color = answers.shapeColor.toLowerCase();
  svgMarkup = svgMarkup.replace(`fill="shapecolor"`, `fill="${color}"`);
  return svgMarkup;
}

// Changes placeholder text in SVG Markup based on users choices.
function createText(svgMarkup, answers) {
  let acronym = answers.text.toUpperCase();
  svgMarkup = svgMarkup.replace(`userText`, `${acronym}`);
  return svgMarkup;
}

// Changes text color in SVG Markup based on users choices.
function setTextColor(svgMarkup, answers) {
  let color = answers.textColor.toLowerCase();
  svgMarkup = svgMarkup.replace(`fill="textcolor"`, `fill="${color}"`);
  return svgMarkup;
}

// Saves the final svgMarkup as a file named Logo.svg
function createLogo(svgMarkup) {
  fs.writeFile("Logo.svg", svgMarkup, (err) => {
    if (err) throw err;
    console.log("Logo Created.");
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
      createShape(answers);
      let svgMarkup = createShape(answers);
      setShapeColor(svgMarkup, answers);
      svgMarkup = setShapeColor(svgMarkup, answers);
      createText(svgMarkup, answers);
      svgMarkup = createText(svgMarkup, answers);
      setTextColor(svgMarkup, answers);
      svgMarkup = setTextColor(svgMarkup, answers);
      createLogo(svgMarkup);
    });
}

init();
