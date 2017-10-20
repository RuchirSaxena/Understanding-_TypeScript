"use strict";
exports.__esModule = true;
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
    return Point;
}());
exports.Point = Point;
