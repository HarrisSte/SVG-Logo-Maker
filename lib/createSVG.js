//Class to createSVG
class createSVG {
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
  setShape(logoShape) {
    this.shapeProperty = logoShape.render();
  }
}
module.exports = createSVG;


