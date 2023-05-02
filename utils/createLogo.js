class Square {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    returnSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> \n
            '<rect x="50" width="200" height="200" fill="${this.shapeColor}"/>' \n
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Circle {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    returnSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> \n
            '<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"></circle>' \n
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}

class Triangle {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    returnSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> \n
            '<polygon points="40,200 260,200 150,0" fill="${this.shapeColor}" />' \n
            <text x="150" y="180" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
            </svg>`;
    }
}


module.exports = {
    
    generateSVG(data) {
        if(data.textchar.length >= 4) {
            console.log("Invalid length");
        }
        else if(data.shapedesign === "Triangle" && data.textchar.length <= 3) {
            let newTriangle = new Triangle(data.shapecolor, data.textchar, data.textcolor);
            return newTriangle.returnSVG();
        } else if (data.shapedesign === "Circle" && data.textchar.length <= 3) {
            let newCircle = new Circle(data.shapecolor, data.textchar, data.textcolor);
            return newCircle.returnSVG();
        } else if (data.shapedesign === "Square" && data.textchar.length <= 3) {
            let newSquare = new Square(data.shapecolor, data.textchar, data.textcolor);
            return newSquare.returnSVG();
        } else {
            return `There was an error`;
        }
    }
}




