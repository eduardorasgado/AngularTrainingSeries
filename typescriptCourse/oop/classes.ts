
enum Type {
  Normal = "Normal",
  Agua = "Agua",
  Fuego = "Fuego",
  Tierra = "Tierra",
  Viento = "Viento"
}

class Animal {
  type: Type;
  life: number;

  constructor(type?: Type, life?: number) {
    this.type = type != null ? type : Type.Normal;
    this.life = life != null ? life : 100;
  }

  getLife() {
    return this.life;
  }

  getType() {
    return this.type;
  }
}

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

var a1: Animal;
var tipo_agua: Type;
tipo_agua = Type.Fuego;
a1 = new Animal(tipo_agua, 98);
console.log(a1.getType());
