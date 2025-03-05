const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

//method to calculate daily wage
function calculateDailyWage(employeeHour){
    return employeeHour * WAGE_PER_HOUR;
}
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

//array and map to store daily wage
let dailyWageArray = new Array();
let dailyWageMap = new Map();

while(totalEmployeeHour <= MAX_HOUR_IN_MONTH && totalWorkingDay < NUMBER_OF_DAYS){
    totalWorkingDay++;
    let employeeCheck = Math.floor(Math.random()*10%3);
    let employeeHour = getWorkingHour(employeeCheck);
    totalEmployeeHour += employeeHour;
    dailyWageArray.push(calculateDailyWage(employeeHour));
    dailyWageMap.set(totalWorkingDay, calculateDailyWage(employeeHour))
}
//print map
console.log("map\n",dailyWageMap);

let employeeWage = calculateDailyWage(totalEmployeeHour)

// //print result
// console.log(dailyWageArray);

//array helper functions
let totalEmployeeWage = 0;
function sum(dailyWage){
    totalEmployeeWage += dailyWage;
}
dailyWageArray.forEach(sum);
console.log("total days ",totalWorkingDay," total hours ", totalEmployeeHour, " employee wage ", totalEmployeeWage)

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}

console.log("employee wage with reduce - " + dailyWageArray.reduce(totalWages, 0))

//show day along with daily wage
let dailyCounter = 0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter + " = "+dailyWage
}
let mapDayWithWageArray = dailyWageArray.map(mapDayWithWage);
console.log("daily wage map \n ", mapDayWithWageArray);

//show day when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage)
console.log("full time wage earned \n", fullDayWageArray);

//first time full wage
console.log("first time fulltime wage\n", mapDayWithWageArray.find(fullTimeWage));

//verify full time wage array
console.log("all element have full time wage\n", fullDayWageArray.every(fullTimeWage));

//print part time wage
function isPartTimeWage(dailyWage){
    return dailyWage === "80";
}
let partTimeWage = mapDayWithWageArray.filter(isPartTimeWage);
console.log("part time wage\n", partTimeWage);

//number of days employee worked
function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage > 0){
        return numberOfDays+1;
    }
    return numberOfDays;
}
console.log("number of days employee worded-",dailyWageArray.reduce(totalDaysWorked,0));