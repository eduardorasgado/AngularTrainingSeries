class Person {
    // attributes
    firstName: string;
    lastName: string;

    constructor(firstName?: string, lastName?: string) {
        this.firstName = firstName != null ? firstName : " ";
        this.lastName = lastName != null ? lastName : " ";
    }
    // methods
    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

// Declaring p1 type to only support Person
// assignments
var p1: Person;
var p1 = new Person();

var p2: Person = new Person(" ", "Gomez");

p1.firstName = "Eduardo";
p1.lastName = "Rasgado";

p2.firstName = "Nunito";
//p2.lastName = "Gomez";

console.log(p1.getFullName());
console.log(p2.getFullName());