var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Parallelogram = /** @class */ (function (_super) {
    __extends(Parallelogram, _super);
    function Parallelogram(width, height, base) {
        var _this = _super.call(this, width, height) || this;
        _this.base = base;
        return _this;
    }
    Parallelogram.prototype.calculateArea = function () {
        return this.base * this.height;
    };
    Parallelogram.prototype.calculatePerimeter = function () {
        return 2 * (this.base + this.height);
    };
    return Parallelogram;
}(Rectangle));
var myRectangle = new Rectangle(3, 4);
var myParallelogram = new Parallelogram(2, 3, 8);
console.log("The area of the rectangle is:", myRectangle.calculateArea());
console.log("The perimeter of the rectangle is:", myRectangle.calculatePerimeter());
console.log("The area of the parallelogram is:", myParallelogram.calculateArea());
console.log("The perimeter of the parallelogram is:", myParallelogram.calculatePerimeter());
