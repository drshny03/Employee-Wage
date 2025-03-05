const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//method to calculate working hour
function getWorkingHour(employeeCheck){
    switch(employeeCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
//number of working day
const NUMBER_OF_DAYS = 20;
let employeeHour = 0;

//calculate for 20 days
for(let day = 0; day<NUMBER_OF_DAYS; day++){
    let employeeCheck = Math.floor(Math.random()*10%3);
    //call function to calculate working hour
    employeeHour += getWorkingHour(employeeCheck)
}

let employeeWage = employeeHour * WAGE_PER_HOUR;
//print result
console.log("employee wage ", employeeWage)