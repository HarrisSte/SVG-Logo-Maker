//Classes for shapes
class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

//Different shape classes"
//Circle
class Circle extends Shape {
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.color}"/>`;
  }
}

//Square
class Square extends Shape {
  render() {
    return `<rect x="10" y="10" width="30" height="30" fill="${this.color}"/>`;
  }
}
//Triangle
class Triangle extends Shape {
  render() {
    return `<points='150,18 244, 182 56, 182' fill="${this.color}"/>`;
  }
}

module.exports = { Shape, Circle, Square, Triangle };
