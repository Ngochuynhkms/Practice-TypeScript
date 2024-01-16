enum Taskstate{
    Pending = 10,
    Document,
    Active,
    Deprecated
}

interface TaskInterface{
    id: number;
    name: string;
    status?: Taskstate;
}

class TaskService{
    tasks: TaskInterface[];

    constructor(tasks: TaskInterface[]){
        this.tasks = tasks;
    }

    getItems(){
        return this.tasks;
    }
}

let tasks: TaskInterface[] = [
    {id: 1, name: "developer", status: Taskstate.Active}
];

let TaskServiceObject = new TaskService(tasks);
console.log(TaskServiceObject.getItems());
