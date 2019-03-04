class Machine {
    //private name: string;
    //private weight: number;
    private width: number;
    private height: number;

    // automatically declared name as part of the class
    // by declaring encapsularion in constructor params
    constructor(private name: string, protected weight: number) {
        //this.name = name;
        //this.weight = weight;
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

    constructor(name: string, weight: number){
        super(name, weight);

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

var audi: Machine = new Car("racing car", 1800);
audi.setName("racing car again");

var scania: Car = new Car("truck", 3000);
scania.setName("europe truck");
scania.setMark("scania");

console.log(audi.getMachine());
console.log(scania.getMachine());