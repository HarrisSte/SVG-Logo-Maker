// Import required files/infomation
const inquirer = require("inquirer");
const fs = require("fs").promises;
// const createSVG = require("./lib/createSVG");
const { Circle, Square, Triangle } = require("./lib/shapes");

// Questions for users to answer to create logo
const userInput = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters:",
    // validate: (input) => input.length <= 3,
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
  .then(({ textColor, text, shape, shapeColor }) => {
    let shapeInstance;

    switch (shape) {
      case "circle":
        shapeInstance = new Circle();
        break;
      case "square":
        shapeInstance = new Square();
        break;
      case "triangle":
        shapeInstance = new Triangle();
        break;
    }
    shapeInstance.setColor(shapeColor);

    const createSVG = new createSVG();
    createSVG.setText(text, textColor);
    createSVG.setShape(shapeInstance);

    return fs.writeFile("./examples/logo.svg", createSVG.render());
  })
  .then(() => console.log("Created SVG Logo!"))
  .catch((err) => console.error(err));
  
