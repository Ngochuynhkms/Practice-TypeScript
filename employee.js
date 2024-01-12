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
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Salary: ").concat(this.salary);
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, department) {
        var _this = _super.call(this, name, salary) || this;
        _this.department = department;
        return _this;
    }
    Manager.prototype.calculatePay = function () {
        return this.salary + 1000;
    };
    Manager.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Salary: ").concat(this.calculatePay(), ", Department: ").concat(this.department);
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary, programmingLanguage) {
        var _this = _super.call(this, name, salary) || this;
        _this.programmingLanguage = programmingLanguage;
        return _this;
    }
    Developer.prototype.getInfo = function () {
        return "Name: ".concat(this.name, ", Salary: ").concat(this.salary, ", Department: ").concat(this.programmingLanguage);
    };
    return Developer;
}(Employee));
var employee = new Employee("John", 5000);
console.log(employee.getInfo());
var manager = new Manager("Alice", 10000, "Sales");
console.log(manager.getInfo());
var developer = new Developer("Bob", 6000, "Javascript");
console.log(developer.getInfo());
