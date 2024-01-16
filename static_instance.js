var InfoEmployee = /** @class */ (function () {
    function InfoEmployee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        InfoEmployee.headcount++;
    }
    InfoEmployee.getHeadcount = function () {
        return InfoEmployee.headcount;
    };
    InfoEmployee.headcount = 0;
    return InfoEmployee;
}());
var a = new InfoEmployee("Ngoc", "Huynh", "Tester");
var b = new InfoEmployee("David", "Doe", "Developer");
console.log(InfoEmployee.getHeadcount());
