//FileName : SubTask.ts
export class SubTask{
    
    private subtasks: Array<object>;
    
    constructor(subtasks : [{id: number, taskId: number, name: string}]){
        this.subtasks = subtasks;
    }
    
    public addSubTask(subtask: {id:number, taskId: number, name: string}): void {
        this.subtasks.push(subtask);
    }

    public getSubTasks(): any {
        return this.subtasks;
    }
    
} 