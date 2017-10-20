//DECLARING VALIABLE IN Typescript
var a = 10;
var b = 20;
function test() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //  console.log(i); =>will throw an error in ts
}
//Type Annotations
var a1;
var b1;
var c1;
var d; //by default values are any (not good practice)
var e = [1, 2, 3];
var f = ["Hello", "World"];
//Enum in Typescript
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var backgroundcolor = Color.red;
//Type Assertions
var message = 'Hello World';
var messageOther; //Not recommended way of defining variables
var messagePerfect; //Defining whats its actual type is
messagePerfect = "Perfect World";
messageOther = 'Other World';
/*
 Below code not working
function checkMessage() {
    let result=(message as string).endsWith('P');
    if (result) {
        console.log("cool");
    } else {
        console.log("un cool");
    }
}*/
//console.log(checkMessage());
//Arrow Functions
//old way
var log = function (message) {
    console.log(message);
};
//Arrow way
var dolog = function (message) {
    console.log(message);
};
dolog("Arrow function");
//Custom Types
//old way of declaring parameters in function
var drawPoint = function (x, y, z, p, q) {
    //... your code
};
var drawPoint1 = function (points) {
};
//Custom Types 
drawPoint1({
    x: 1,
    y: 2,
    z: 3,
    p: 4,
    q: 9
});
/* The above code can broke coz we can pass string to it , to improve it we can write below code*/
var drawPoint2 = function (points) {
    //your code
};
//Custom Types 
drawPoint2({
    x: 1,
    y: 2
});
var drawPoint3 = function (point) {
    //your code
};
//The above has voilating the concept of cohesion (oops) which states that things which are related should be part of 1 unit
var Point = /** @class */ (function () {
    /*  private  x:number;
    private y:number;
 
     //Note:we cannot have multiple contructors in Typescript ie:only 1 contructor
     //x?:number => ? is for declaring optional params
     constructor(x?:number,y?:number){
         this.x=x;
         this.y=y;
     } */
    //OR above Code Can be re-wriiten as below code
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        //defining properties
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value cannot be less than 0.');
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.draw = function () {
        console.log("x=" + this._x);
        console.log("y=" + this._y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point(10, 50);
//=>Private members can not be accesed outside
//point.x=10; 
//point.y=30;
//After setting of property
/* point.x=10;
point.y=70; */
//Calling call method
point.draw();
