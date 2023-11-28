var Circle = /** @class */ (function () {
    //to create a constructor with optional parameter
    function Circle(radius, color) {
        this.radius = 1.0;
        this.color = "Red";
        if (typeof (radius) !== "undefined") {
            this.radius = radius;
        }
        if (typeof (color) !== "undefined") {
            this.color = color;
        }
    }
    //function to get radius value with number as return type
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    //function to set radius value
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    //function to get color value with custom return type colorData
    Circle.prototype.getColor = function () {
        return this.color;
    };
    //function to set the color value
    Circle.prototype.setColor = function (color) {
        this.color = color;
    };
    //to return string of member variables value
    Circle.prototype.toString = function () {
        return "Radius: ".concat(this.radius, " Color: ").concat(this.color);
    };
    //to compute and return circle area using radius
    Circle.prototype.getArea = function () {
        return ((Math.PI) * this.radius * this.radius);
    };
    //to compute and return circle circumference using radius
    Circle.prototype.getCircumference = function () {
        return (2 * (Math.PI) * this.radius);
    };
    return Circle;
}());
//to invoke the Circle-class constructor with no param
var c1 = new Circle();
console.log("Constructor with no params: " + c1.toString());
//to invoke the Circle-class constructor with one param
var c2 = new Circle(3.5);
console.log("Constructor with one param: " + c2.toString());
//to invoke the Circle-class constructor with all the params
var c3 = new Circle(2.2, 'Yellow');
console.log("getRadius: " + c3.getRadius());
c3.setRadius(3.3);
console.log("Radius value after setRadius: " + c3.getRadius());
console.log("getColor: " + c3.getColor());
c3.setColor("Blue");
console.log("Color Value after setColor: " + c3.getColor());
console.log(c3.toString());
console.log("Area: " + c3.getArea());
console.log("Circumference: " + c3.getCircumference());
