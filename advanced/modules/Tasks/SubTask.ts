//FileName : SubTask.ts
export class SubTask{  
    constructor(private subtasks?: [{id: number, taskId: number, name: string}]){  
    }
    
    public addSubtask(subtask: {id:number, taskId: number, name: string}): void {
        this.subtasks.push(subtask);
    }

    public getSubtasks(): any {
        return this.subtasks;
    }
    
} 