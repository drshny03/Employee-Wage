class EmployeePayroll{
    //properties
    id;
    name;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params){
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2]; 
        this.gender = params[3];
        this.startDate = params[4]
    }
    //getter and setter
    get name(){
        return this.name;
    }
    set name(name){
        this.name = name;
    }
    toString(){
        return "id = "+this.id+", name = "+this.name+", salary= "+this.salary," gender= ",this.gender,", startDate= ",this.startDate;
    }
}
//create employee object
let rajveerEmployeePayroll = new EmployeePayroll(1,"Rajveer",80000);
console.log(rajveerEmployeePayroll.toString());
rajveerEmployeePayroll.name = "Veer";
console.log(rajveerEmployeePayroll.toString());

//new empl0yee
let darshanEmployee = new EmployeePayroll(2,"Darshan", 75000, "M", "25-02-2025")
console.log(darshanEmployee.toString);

