// defining functions in typescript
function add(a: number, b: number) {
    return a + b;
}

// optional argument by using question mark ?
function add2(a: number, b: number, c?: number) : number{
    if(c != null){
        return a + b + c;
    }
    return a + b;
}

// last number also is the ooptional and has a default value
function mult(a: number, b: number, c: number = 0) : number{
    return (a * b) + c;
}

// return type can be specified at the end of params
function divide(a: number, b: number) : number {
    return a / b;
}

var x: number;
var y: number;
var z: number;
var w: number;

var sum = add(4,2);
console.log(sum);

x = add2(3, 2, 5);
console.log(x);
y = add2(3, 2);
console.log(y);
z = mult(4, 4, 4);
console.log(z);
w = mult(4, 4);
console.log(w);

console.log(divide(10, 2));