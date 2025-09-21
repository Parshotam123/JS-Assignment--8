// Assignments Chapters 31-34

// Q#1
let a = new Date();
document.write(a + "<br>");

// Q#2
let now = new Date();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthName = months[now.getMonth()];
alert("The current month is: " + monthName);

// Q#3
let today = "Sunday";
alert(today.slice(0, 3));

// Q#4
let getDay = prompt("Enter day");
if (getDay.toLowerCase() == "sunday" || getDay.toLowerCase() == "saturday") {
    document.write("It's Fun day" + "<br>");
}
else {
    document.write("It's not fun day" + "<br>");
};

// Q#5
let b = new Date();
if (b < 16) {
    document.write("First fifteen days of month!" + "<br>");
}
else {
    document.write("Last days of the month!" + "<br>");
};

// Q#6
var d = new Date();
var millsSince = d.getTime();
document.write("Current Date)" + d + "<br>");
document.write("Elapsed milli seconds since Jan, 1 1970" + millsSince + "<br>");
document.write("Elapsed minutes since Jan, 1, 1970" + millsSince / 60000 + "<br>");

// Q#7
let hourAm = new Date();
hourAm = now.getHours();
if (hourAm < 12) {
    alert("It is am");
} else {
    alert("It is pm");
}

// Q#8
let laterDate = new Date(2020, 11, 31);
document.write("Later Date: " + laterDate + "<br>");

// Q#9
let ramadanStart = new Date("June 18, 2015");
currentDate = new Date();
let differenceInMs = currentDate.getTime() - ramadanStart.getTime();
let daysPassed = Math.floor(differenceInMs / (1000 * 60 * 60 * 24));

alert("The number of days that have passed since first Ramadan 2015 is: " + daysPassed);

// Q#10
let beginningOf2015 = new Date('January 1, 2015 00:00:00 GMT');
let millisecondsElapsed = beginningOf2015.getTime();
let secondsElapsed = Math.floor(millisecondsElapsed / 1000);
document.write("The number of seconds that have elapsed between the reference date (January 1, 1970) and the beginning of 2015 is: " + secondsElapsed + "<br>");

// Q#11
let nowDate = new Date();
let currentHour = now.getHours();
nowDate.setHours(currentHour + 1);
document.write("The new date and time, one hour ahead, is: " + now + "<br>");

// Q#12
let aajKiDate = new Date();
aajKiDate.setFullYear(currentDate.getFullYear() - 100);
alert("The date 100 years ago was: " + aajKiDate);

// Q#13
let userAge = prompt("Please enter your age:");
let currentYear = new Date().getFullYear();
let birthYear = currentYear - userAge;
document.write("Based on your age, your birth year is: " + birthYear + "<br>" + "<br>");

// Q#14
function generateKElectricBill() {
    let customerName = "Pawan Kumar";
    let currentMonth = "September 2025";
    let numberOfUnits = 350;
    let chargesPerUnit = 25.50;
    let latePaymentSurcharge = 500;

    let netAmountPayable = numberOfUnits * chargesPerUnit;
    let grossAmountPayable = netAmountPayable + latePaymentSurcharge;

    let netAmountRounded = netAmountPayable.toFixed(2);
    let grossAmountRounded = grossAmountPayable.toFixed(2);
    document.write("<b>K-Electric Bill</b>" + "<br>" + "Customer Name: " + customerName + "<br>"
    + "Month: " + currentMonth + "<br>" + "Number of units: " + numberOfUnits + "<br>" + 
    "Charges per unit: " + chargesPerUnit + "<br>" + "<br>" 
    + "Net Amount Payable (within Due Date): " + netAmountPayable + "<br>" + "Late Payment Surcharge: " 
    + latePaymentSurcharge + "<br>" + "Gross Amount Payable (after Due Date): " + grossAmountPayable);
}

// Call the function to generate and display the bill
generateKElectricBill();