// types feature
let a: number;
var b: string;
var c: boolean;
//var foo = undefined;
var foo: undefined;

// arrays
// array of numbers
var myArr: number[];

a = 19;
b = "Hello typeScript";
c = true;
myArr = [1,2,3,4,5];
myArr.push(6);
a = myArr.pop();

myArr.map((a) => console.log(a));
console.log(a);
console.log(b);