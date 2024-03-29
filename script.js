// Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("Enter city name: ");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
} else {
    alert("Welcome to " + city);
}
// Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender (male/female): ");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Invalid input. Please enter 'male' or 'female'.");
}
// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now
let color = prompt("Enter the color of the traffic signal (Red/Yellow/Green): ");

switch (color.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid input. Please enter 'Red', 'Yellow', or 'Green'.");
}
// Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres): "));
if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car.");
} else {
    alert("You have enough fuel in your car.");
}
// last question (A)
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// True
// last question (B)
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// false
// last question (C)
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
// FALSE
if (c === 13){
alert("condition 2 is true");
}
// true
if (++c < 14){
alert("condition 3 is true");
}
// false
if(c === 14){
alert("condition 4 is true");
}
// true

// last question (d)
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// true

// last question (e)
if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }
    // first message print but second not printed because false is always false 