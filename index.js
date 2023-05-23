// Import required files/infomation
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const { createSVG } = require("./lib/createSVG");
const shapes = require("/lib/shapes");

// Questions for users to answer to create logo
const prompts = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3,
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color:",
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
    message: "Enter the shape color:",
  },
];
