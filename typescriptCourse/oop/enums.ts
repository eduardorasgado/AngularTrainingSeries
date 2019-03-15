// enumerations in typescript

enum DaysOfWeek {
    SUNDAY,
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY
}

// we can assign custom values to enum types
enum Months {
    JAN = 100, FEB = 200,
    MAR = 300, APR = 400,
    MAY = 500, JUN = 600,
    JUL = 700, AUG = 800,
    SEP = 900, OCT  = 1000,
    NOV = 1100, DEC = 1200
}

let day: DaysOfWeek;
day = DaysOfWeek.MONDAY;

if(day === DaysOfWeek.MONDAY) {
    console.log("Today is Monday");
}

let month: Months;

month  = Months.DEC;
if(month == Months.DEC) {
    console.log("this month is: " + month);
}