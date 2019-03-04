// In typescript we can create interfaces
interface Persona {
    firstName: string;
    secondName: string;

    // declaring methods
    getFullName(): string;
}

class Foo implements Persona {
    // implementing an interface
    firstName: string;
    secondName: string;

    getFullName(): string {
        return this.firstName + " " + this.secondName;
    }

}

let persona1: Persona = new Foo();
console.log(persona1.getFullName());


// Duck typing
// similar to Foo
let someObj = {
    firstName: "Test",
    secondName: "Test",
    getFullName: () => "Test",

    // we can have some other attributes or methods in the object
    // but we cannot access them if we use duck typing with Persona class
    // because Persona class has no the foo attribute
    foo: 100
};

// now this is fine because object someObj is fitting Persona class
persona1 = someObj;
console.log(persona1.getFullName());