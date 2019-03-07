class Persona {
    private nombre: string;
    private genero: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    public saludar(otro: string): string {
        return "La chica " + this.nombre + " saluda a: " + otro;
    }
}

class Administrador extends Persona {
    private carrera: string;
    // del 1 al 10 que tan profesional es
    private profesionalismo: number;

    constructor(nombre: string){
        super(nombre);
        console.log("Se ha creado una administradora");
    }
}

var eli: Administrador;
eli = new Administrador("Elizabeth");

console.log(eli.saludar("Geizel"));

