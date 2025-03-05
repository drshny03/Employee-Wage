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
const MAX_HOUR_IN_MONTH = 160;
let totalEmployeeHour = 0;
let totalWorkingDay = 0;

while(totalEmployeeHour <= MAX_HOUR_IN_MONTH && totalWorkingDay < NUMBER_OF_DAYS){
    totalWorkingDay++;
    let employeeCheck = Math.floor(Math.random()*10%3);
    totalEmployeeHour += getWorkingHour(employeeCheck);
}

let employeeWage = totalEmployeeHour * WAGE_PER_HOUR;
//print result
console.log("total days ",totalWorkingDay," total hours ", totalEmployeeHour, " employee wage ", employeeWage)