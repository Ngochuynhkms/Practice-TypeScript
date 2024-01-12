/*
Build a class Employee with the following properties:
name: a string representing the employee's name
salary: a number representing the employee's salary.
The Employee class should have a constructor to initialize the name and salary properties.

Write a method getInfo() in the Employee class to display the employee's information including 
the name and salary. This method should return a string.

Build a subclass Manager that inherits from the Employee class with the additional property:
department: a string representing the department the manager oversees
The Manager class should have a constructor to initialize the properties of both the subclass and the 
superclass.

Override the calculatePay() method in the Manager class to calculate the manager's pay. The manager's 
pay is the current salary plus an additional $1000 as a bonus.

Override the getInfo() method in the Manager class to display the manager's information including the 
name, salary, and department.

Build a subclass Developer that inherits from the Employee class with the additional property:
programmingLanguage: a string representing the programming language the developer uses.
The Developer class should have a constructor to initialize the properties of both the subclass and 
the superclass.

Override the getInfo() method in the Developer class to display the developer's information including 
the name, salary, and programming language.

Create objects employee, manager, and developer from the respective classes with arbitrary values for the properties. Call the getInfo() method on each object and print the results to the console.

*/

class Employee {
    name: string;
    salary: number;
  
    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
  
    getInfo(): string {
      return `Name: ${this.name}, Salary: ${this.salary}`;
    }
  }
  
  class Manager extends Employee {
    department: string;
  
    constructor(name: string, salary: number, department: string) {
      super(name, salary);
      this.department = department;
    }
  
    calculatePay() {
      return this.salary + 1000;
    }
  
    override getInfo(): string {
      return `Name: ${this.name}, Salary: ${this.calculatePay()}, Department: ${
        this.department
      }`;
    }
  }
  
  class Developer extends Employee {
    programmingLanguage: string;
  
    constructor(name: string, salary: number, programmingLanguage: string) {
      super(name, salary);
      this.programmingLanguage = programmingLanguage;
    }
  
    override getInfo(): string {
      return `Name: ${this.name}, Salary: ${this.salary}, Department: ${this.programmingLanguage}`;
    }
  }
  
  const employee = new Employee("John", 5000);
  console.log(employee.getInfo());
  
  const manager = new Manager("Alice", 10000, "Sales");
  console.log(manager.getInfo());
  
  const developer = new Developer("Bob", 6000, "Javascript");
  console.log(developer.getInfo());