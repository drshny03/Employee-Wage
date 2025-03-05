class EmployeePayroll{
    //properties
    id;
    name;
    salary;
    //constructor
    constructor(id, name, salary){
        this.id = id;
        this.name = name;
        this.salary = salary; 
    }
    //getter and setter
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
    toString(){
        return "id = "+this.id+", name = "+this.name+", salary= "+this.salary;
    }
}
//create employee object
let employeePayroll = new EmployeePayroll(1,"Rajveer",80000);
console.log(employeePayroll.toString());
employeePayroll.name = "Veer";
console.log(employeePayroll.toString());