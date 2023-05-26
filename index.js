// Import required files/infomation
const inquirer = require("inquirer");
const fs = require("fs").promises;
const svgFactory = require("./lib/svgFactory");

const svg = new svgFactory();
// Questions for users to answer to create logo
const userInput = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Choose a shape:",
    choices: ["circle", "triangle", "square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal number):",
  },
];

inquirer
  .prompt(userInput)
  .then(({ textColor, text, shape, shapeColor }) =>
    svg.createLogo(textColor, text, shape, shapeColor)
  )
  .then((logo) => fs.writeFile("./examples/logo.svg", logo))
  .then(() => console.log("Awesome! You've created your SVG Logo!"))
  .catch((err) => console.error(err));
