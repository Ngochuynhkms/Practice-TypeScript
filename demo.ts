function add(x: number, y: number): number {
    return x + y;
  }
  
  let x: number = 10;
  let y: number = 5;
  let sum: number = add(x, y);
  let message: string = `Sum = ${sum}`; 
  console.log(message);