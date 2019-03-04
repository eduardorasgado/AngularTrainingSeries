// in order to migrate js to ts

// this says dont do type checking to a variable
var a: any;
a = 10;
a = true;
a = "String";

console.log(a);

// Union type
// b can be either number or boolean
var b: number | boolean;

b = 10;
b = true;
// cannot be a string now
//b = "String";
console.log(b);