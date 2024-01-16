var Taskstate;
(function (Taskstate) {
    Taskstate[Taskstate["Pending"] = 10] = "Pending";
    Taskstate[Taskstate["Document"] = 11] = "Document";
    Taskstate[Taskstate["Active"] = 12] = "Active";
    Taskstate[Taskstate["Deprecated"] = 13] = "Deprecated";
})(Taskstate || (Taskstate = {}));
var TaskService = /** @class */ (function () {
    function TaskService(tasks) {
        this.tasks = tasks;
    }
    TaskService.prototype.getItems = function () {
        return this.tasks;
    };
    return TaskService;
}());
var tasks = [
    { id: 1, name: "developer", status: Taskstate.Active }
];
var TaskServiceObject = new TaskService(tasks);
console.log(TaskServiceObject.getItems());
