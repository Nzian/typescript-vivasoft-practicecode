import { Employee } from './Employee/Employee';
import { Task } from './Tasks/Task';
import { SubTask } from './Tasks/SubTask';

const hrManager = new Employee([{id:1, name:'Robin', designation:'hr manager'}]);

const hrTask = new Task([{}]);

hrTask.addTask({id:1, empId:0, name:"add new employee"});

console.log(hrTask);
const hrSubTask = new SubTask([{id:1, taskId:1, name:'Publish job posting'}]);
hrSubTask.addSubTask({id:2, taskId: 1, name:"take interview"});

console.log( hrSubTask.getSubTasks());


