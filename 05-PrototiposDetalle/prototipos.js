function Persona(nombre, apellido, fechaNacimiento) {
    var fecha = fechaNacimiento;
    this.nombre = nombre;
    this.apellido = apellido;
    
    this.nombreCompleto = function() {
        return this.apellido + ", " + this.nombre;
    }

    var calcularEdad = function(){
            return parseInt((new Date() - fecha) / 31536000000);
    }

    this.getEdad = calcularEdad();
}

Persona.saluteYou = function() {
    return "Hola soy Persona!";
}
Persona.prototype.saluteYou = Persona.saluteYou;

function Empleado(nombre, apellido, fechaNacimiento, sueldo) {
    Persona.call(this, nombre, apellido, fechaNacimiento);
    this.sueldo = sueldo;
}

Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

// Object.defineProperty(Persona.prototype, "getEdad", {
//     get: function() {
//         return parseInt((new Date() - fecha) / 31536000000);
//     },
//     enumerable: true
// })


var jose = new Persona("Jose", "Rusca", new Date(1999, 12, 12));
var javier = new Empleado("Javier", "Baez", new Date(2005, 12, 12), 130000);



prototypeChain(jose);
prototypeChain(javier);
console.log(jose);
console.log(jose.getEdad);
console.log(javier.getEdad);
console.log(jose.saluteYou());
console.log(javier.saluteYou());

// console.log(jose.constructor.name);
// console.log(javier.getEdad);
// console.log()

function prototypeChain(obj) {
    console.log(obj.constructor.name);
    console.log(" ║  >>> " + JSON.stringify(obj));
    var proto = Object.getPrototypeOf(obj);
    while(proto!=null){
        if(Object.getPrototypeOf(proto)==null) {
            console.log(" ╚═ " + proto.constructor.name);       
            console.log("    >>> " + JSON.stringify(proto));
        }
        else {
            console.log(" ╠═ " + proto.constructor.name);
            console.log(" ║   >>> " + JSON.stringify(proto));            
        }
           
        proto = Object.getPrototypeOf(proto);
    }
 }
 