class Rectangle {
    width: number;
    height: number;
   
    constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
    }
   
    calculateArea(): number {
      return this.width * this.height;
    }
   
    calculatePerimeter(): number {
      return 2 * (this.width + this.height);
    }
  }
   
  class Parallelogram extends Rectangle {
    base: number;
   
    constructor(width: number, height: number, base: number) {
      super(width, height);
      this.base = base;
    }
   
    calculateArea(): number {
      return this.base * this.height;
    }
   
    calculatePerimeter(): number {
      return 2 * (this.base + this.height);
    }
  }
   
  const myRectangle = new Rectangle(3, 4);
  const myParallelogram = new Parallelogram(2, 3, 8);
  console.log("The area of the rectangle is:", myRectangle.calculateArea());
  console.log("The perimeter of the rectangle is:", myRectangle.calculatePerimeter());
  console.log("The area of the parallelogram is:", myParallelogram.calculateArea());
  console.log("The perimeter of the parallelogram is:", myParallelogram.calculatePerimeter());