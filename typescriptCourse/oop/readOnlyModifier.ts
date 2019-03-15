class Persona {
    private readonly name: string;

    constructor(name: string) {
        // readonly attributes can only be assigned in constructor
        // and they wont be modified anymore
        this.name = name;
    }
    // getter
    public getName(): string {
        return this.name;
    }
}

var a: Persona;
a = new Persona("Eduardo");
console.log(a.getName());