// implicit typing
var a = 10;
var b = true;
var c = "hello";

// because a was assigned to a number then a cannot
// be reassined by a non number
//a = false;

function greet() : string {
    return "Good day";
}

var greeting = greet();
console.log(greeting);

// implicit typing only works on declaration
var greeting2;
greeting2 = greet();
// note: this is now allowed
greeting2 = 10;