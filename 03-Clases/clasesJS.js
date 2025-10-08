class Persona {
    #dni;
    static total = 0;
    constructor(nombre, apellido, dni = 11111111, fechaNacmiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#dni = dni;
        this.fechaNacmiento = fechaNacmiento ? this.fechaNacmiento = fechaNacmiento : this.fechaNacmiento = new Date(1900,1,1);
              
        Persona.total +=1;
    }

    get nombreCompleto() {
        return this.apellido + ", " + this.nombre + " (" + this.#dni +") - " + this.edad;
    }

    set nombreCompleto(value) {
        let datos = value.split(",");
        this.nombre = datos[1];
        this.apellido = datos[0];
    }

    get edad() {
        return parseInt((new Date() - this.fechaNacmiento) / 31536000000);
    }

    totalPersonas() {
        return Persona.total;
    }


}

let javy = new Persona("Javier", "Baez", 12345678);
let hernan = new Persona("Hernan", "Gutierrez", 87654321, new Date(1999, 12, 12));

console.log(javy);
console.log(javy.nombreCompleto);
javy.nombreCompleto = "Smith,Javy";
console.log(hernan.nombreCompleto);
//console.log(javy.dni);
console.log("Total de personas: " + javy.totalPersonas());
console.log(javy.edad);
console.log(hernan.edad);


class Empleado extends Persona {
    constructor(nombre, apellido, dni, fechaNacmiento, sueldo) {
        super(nombre, apellido, dni, fechaNacmiento);
        this.sueldo = sueldo;
    }

    detalleSueldo() {
        return this.nombreCompleto + " - Sueldo: " + this.sueldo;
    }
}

let pablo = new Empleado("Pablo", "Fernandez", 1234554321, new Date(2005, 1, 1), 80000);
console.log(pablo.detalleSueldo());
