var javier = {
    nombre: "Javier",
    apellido: "Baez",
    fechaNacimiento: new Date(),
    nombreCompleto: function() {
        return this.apellido + ", " + this.nombre + " - " + this.fechaNacimiento.toLocaleDateString();
    }
}

var adam = Object.create(javier);
javier.telefono = "131-32-3452-345";
console.log(javier);



adam.nombre = "Adam";
adam.apellido = "Fernandez";
console.log(adam.telefono);

// for(const prop in javier) {
//     console.log("- " + prop + " => " + javier[prop]);
// }

// console.log(Object.getOwnPropertyNames(javier));

// console.log(Object.keys(javier));

// console.log(javier.constructor.toString());
