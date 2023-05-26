const { Circle, Square, Triangle } = require("./shapes");

class SvgFactory {
  constructor() {
    this.textProperty = "";
    this.shapeProperty = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeProperty}${this.textProperty}</svg>`;
  }
  setText(message, color) {
    this.textProperty = `<text x="150" y="135" font-size="45" text-anchor="middle" fill="${color}">${message}</text>`;
  }
  setShape(shape) {
    this.shapeProperty = shape.render();
  }

  createLogo(textColor, text, shape, shapeColor) {
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

    this.setText(text, textColor);
    this.setShape(shapeInstance);

    return this.render();
  }
}
module.exports = { SvgFactory };
