//Import what I will need for the test
const svgFactory = require("svgFactory");


describe("SVG Rendering", () => {
  test("Circle shape renders correctly", () => {
    const svg = new svgFactory();
    const renderedSVG = svg.createLogo("pink", "SRC", "circle", "red");

    expect(renderedSVG).toContain("fill=pink");
    expect(renderedSVG).toContain("SRC");
    expect(renderedSVG).toContain("<circle");
    expect(renderedSVG).toContain("red");
  });
});
