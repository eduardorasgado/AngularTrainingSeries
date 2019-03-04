class Machine {
    private name: string;
    private weight: number;
    private width: number;
    private height: number;

    constructor() {
        console.log("A machine was created");
    }
    getMachine(){
        return "machine name: " + this.name + ", weight: " + this.weight;
    }

    // setters and getters
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getWeight(): number {
        return this.weight;
    }

    setWeight(weight: number): void {
        this.weight = weight;
    }
}

class Car extends Machine {
    private fieldClassification: string;
    private mark: string;
    private model: number;
    private serie: string;

    constructor(){
        super();
        console.log("A car was created");
    }

    getMachineNormal(): string {
        return super.getMachine();
    }

    getMachine(): string {
        return this.getName() + " mark: " + this.mark;
    }

    getfieldClassification(){
        return this.fieldClassification;
    }

    getMark(): string {
        return this.mark;
    }

    setMark(mark: string): void {
        this.mark = mark;
    }
}

var audi: Machine = new Car();
audi.setName("racing car");

var scania: Car = new Car();
scania.setName("truck");
scania.setMark("scania");

console.log(audi.getMachine());
console.log(scania.getMachine());