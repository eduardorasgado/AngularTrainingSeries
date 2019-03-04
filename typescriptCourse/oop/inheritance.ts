class Person {
    firstName: string;
    secondName: string;

    constructor(){
        console.log("A new person was created");
    }

    greet() {
        console.log("Hey  there!");
    }
}

class Programmer extends Person {
    //
    constructor(){
        // calling the father constructor is a must
        super();
        console.log("A new programmer was created");
    }

    greet() {
        console.log("Hello world!")
    }

    greetLikeNormalPeople(){
        // access method it is inherited from
        super.greet();
    }
}

class Farmer extends Person {
    constructor(){
        super();
        console.log("A farmer was created");
    }

    greet() {
        console.log("Heeeeey boy! come on ya!");
    }
    greetLikeNormalPerson(){
        super.greet();
    }
}

var a: Person;
a = new Person();
a.greet();

var eduardo: Programmer;
eduardo = new Programmer();

eduardo.greet();
eduardo.greetLikeNormalPeople();

// a Person acting like a Programmer -> polymorphism
var memo: Person = new Programmer();
// calling greet from programmer
memo.greet();

var cardenas: Person = new Farmer();
cardenas.greet();