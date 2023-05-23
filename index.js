// Import required files/infomation
const inquirer = require("inquirer");
const { writeFile } = require("fs");
const { createSVG } = require("./lib/createSVG");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Questions for users to answer to create logo
const userInput = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    validate: (input) => input.length <= 3,
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

// Prompt the user with the questions
inquirer
  .prompt(userInput)
  .then((answers) => {
    const logoData = createSVG(answers);
    writeFile("logo.svg", logoData, (err) => {
      if (err) {
        console.error("Error writing logo file:", err);
      } else {
        console.log("Logo created successfully!");
      }
    });
  })
  .catch((error) => {
    console.error("Error occurred:", error);
  });
