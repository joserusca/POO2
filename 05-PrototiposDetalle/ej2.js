function prototypeChain(obj) {
  console.log(obj.constructor.name);
  console.log(" ║  >>> " + JSON.stringify(obj));
  var proto = Object.getPrototypeOf(obj);
  while (proto != null) {
    if (Object.getPrototypeOf(proto) == null) {
      console.log(" ╚═ " + proto.constructor.name);
      console.log("    >>> " + JSON.stringify(proto));
    } else {
      console.log(" ╠═ " + proto.constructor.name);
      console.log(" ║   >>> " + JSON.stringify(proto));
    }

    proto = Object.getPrototypeOf(proto);
  }
}

function Empleado(sueldo) {
  this.sueldo = sueldo;
}

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.nombreCompleto = function () {
    return this.apellido + "," + this.nombre;
  };
}
let javy = new Persona("Javier", "Baez");
Persona.prototype.edad = 36;
prototypeChain(javy);
let juan = new Persona("Juan", "Perez");
juan.edad = 21;
prototypeChain(juan);
// const javy = { nombre: "javier", apellido: "Baez" };
// console.log(javy.nombreCompleto());
// function varList() {
//   return Object.getOwnPropertyNames(this);
// }

// console.log(varList());
// Persona.prototype.dni = 123;
// let adam = Object.create(javy);

// // console.log(javy);
// adam.nombre = "Adam";
// adam.fechaNacimiento = new Date();
// // console.log(adam);
// let fede = Object.create(adam);
// // console.log(Object.getPrototypeOf(fede));
// // console.log(Object.getPrototypeOf(adam));
// // console.log(fede);
// // console.log(fede.nombreCompleto());
// // console.log(fede.constructor.toString());
// // console.log(javy.constructor.toString());

// Empleado.prototype = Object.create(Persona.prototype);
// Empleado.prototype.constructor = Empleado;
// const juan = new Empleado(1234566);
// prototypeChain(juan);
