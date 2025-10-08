// Con Clases
// class Persona {
//     constructor(nombre, apellido, fechaNacimiento) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.fechaNacimiento = fechaNacimiento
//     }

//     nombreCompleto() {
//         return this.apellido + ", " + this.nombre;
//     }
// }

// var javier = new Persona("Javier", "Baez", new Date());

var javier = {
    nombre: "Javier",
    apellido: "Baez",
    fechaNacimiento: new Date(),
    nombreCompleto: function() {
        return this.apellido + ", " + this.nombre + " - " + this.fechaNacimiento.toLocaleDateString();
    }
}

var carlos = {
    nombre: "Carlos",
    apellido: "Iturralde",
    fechaNacimiento: new Date(),
    nombreCompleto: function() {
        return this.apellido + ", " + this.nombre + " - " + this.fechaNacimiento.toLocaleDateString();
    }
}

// var personas = [javier, carlos];

// personas.forEach( item => console.log(item.nombreCompleto()) );

console.log(javier.nombreCompleto.toString());