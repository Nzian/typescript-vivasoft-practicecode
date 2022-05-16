//FileName : Employee.ts
export class Employee{
    /**
     * initiate with employees array
     * @param employees <array><object>
     */
    private employees : Array<object>;
    constructor(employees : [{id: number, name: string, designation: string}]){
        this.employees = employees;
    }
    /**
    * add a employee 
    */
    public addEmployee(employee: {id:number, name: string, designation: string}): void {
        employee.id = this.between(100, 1000000);
        this.employees.push(employee);
    }
    /**
     * Get all employees 
     * @returns <array>Employees 
     */
    public getEmployees(key?: number): any {
        if(!key)
            return this.employees;
        return this.employees[key];
    }

    /**
    * Returns a random number between min (inclusive) and max (inclusive)
    */
    between(min: number, max: number): number {  
        return Math.floor(
        Math.random() * (max - min + 1) + min
        )
    }
    
} 