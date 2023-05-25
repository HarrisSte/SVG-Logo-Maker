//Import what I will need for the test
const createSVG = require("./lib/createSVG");
const { Circle, Square, Triangle } = require("./lib/shapes");

describe("SVG Rendering", () => {
  test("Circle shape renders correctly", () => {
    const shapeInstance = new Circle();
    shapeInstance.setColor("#FF0000"); // Set a specific color for testing

    const svg = new createSVG();
    svg.setText("ABC", "black"); // Set text and text color for testing
    svg.setShape(shapeInstance);

    const renderedSVG = svg.render();
    expect(renderedSVG).toContain("<circle");
    expect(renderedSVG).toContain('fill="#FF0000"');
  });

  test("Square shape renders correctly", () => {
    const shapeInstance = new Square();
    shapeInstance.setColor("#00FF00"); // Set a specific color for testing

    const svg = new createSVG();
    svg.setText("XYZ", "white"); // Set text and text color for testing
    svg.setShape(shapeInstance);

    const renderedSVG = svg.render();
    expect(renderedSVG).toContain("<rect");
    expect(renderedSVG).toContain('fill="#00FF00"');
  });

  test("Triangle shape renders correctly", () => {
    const shapeInstance = new Triangle();
    shapeInstance.setColor("#0000FF"); // Set a specific color for testing

    const svg = new createSVG();
    svg.setText("123", "gray"); // Set text and text color for testing
    svg.setShape(shapeInstance);

    const renderedSVG = svg.render();
    expect(renderedSVG).toContain("<polygon");
    expect(renderedSVG).toContain('fill="#0000FF"');
  });
});
