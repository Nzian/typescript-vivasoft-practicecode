//FileName : Task.ts
export class Task{  
    constructor(private tasks?: [{id: number, empId: number, name: string}]){  
    }
    
    public addTask(task: {id:number, empId: number, name: string}): void {
        this.tasks.push(task);
    }

    public getTasks(): any {
        return this.tasks;
    }
    
} 