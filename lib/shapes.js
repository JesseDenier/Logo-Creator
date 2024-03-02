class Shape {
  constructor(shapeColor, userText, textColor) {
    this.shapeColor = shapeColor;
    this.userText = userText;
    this.textColor = textColor;
  }
}

class Circle extends Shape {
  render() {
    return `
        <svg width="300" height="200">
          <circle cx="150" cy="100" r="75" fill="${this.shapeColor}" />
          <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="${this.textColor}">${this.userText}</text>
        </svg>`;
  }
}

class Triangle extends Shape {
  render() {
    return `
        <svg width="300" height="200">
          <polygon points="150,37.5 225,162.5 75,162.5" fill="${this.shapeColor}"/>
          <text x="50%" y="64%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="${this.textColor}">${this.userText}</text>
        </svg>`;
  }
}

class Square extends Shape {
  render() {
    return `
        <svg width="300" height="200">
          <rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}" />
          <text x="50%" y="58%" text-anchor="middle" alignment-baseline="middle" font-family="Arial" font-size="40" fill="${this.textColor}">${this.userText}</text>
        </svg>`;
  }
}

module.exports = { Shape, Circle, Triangle, Square };
