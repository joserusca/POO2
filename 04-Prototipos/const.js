function Persona(nombre, apellido, fechaNacimiento) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
    this.nombreCompleto = function() {
        return this.apellido + ", " + this.nombre + " - " + this.fechaNacimiento.toLocaleDateString();
    }
}

var javier = new Persona("Javier", "Baez", new Date());
//javier.telefono = "123412341234";
Persona.prototype.telefono = "123412341234";
var carlos = new Persona("Carlos", "Iturralde", new Date());

console.log(javier);
console.log(carlos.telefono);
// console.log(carlos.nombreCompleto());

// function varList(){
//     return Object.getOwnPropertyNames(this);
// }

// console.log(varList());

