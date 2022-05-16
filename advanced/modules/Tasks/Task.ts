//FileName : Task.ts
export class Task{
    private tasks: Array<object>;
    constructor(tasks : [{}]){
        this.tasks = tasks;
    }
    
    public addTask(task: {id:number, empId: number, name: string}): void {
        this.tasks.push(task);
    }

    public getTasks(key: number): any {
        if(key)
            return this.tasks[key];
        return this.tasks;
    }
    
} 