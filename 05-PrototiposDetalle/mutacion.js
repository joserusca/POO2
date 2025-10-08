var jose = {
    nombre: "Jose",
    apellido: "Rusca",
    fechaNacimiento: new Date(),
    nombreCompleto: function() {
        return this.apellido + ", " + this.nombre;
    }
}

var javier = Object.create(jose);
var fer = Object.create(javier);

javier.nombre = "Javier";
javier.apellido ="Baez";
// Object.defineProperty(javier, "sueldo", {    
//     enumerable: true,
//     get: function() {
//         return 130000;
//     },
//     writable: true,
// })

// console.log(jose);
// console.log(Object.getPrototypeOf(jose));
// console.log(Object.getPrototypeOf(javier));
// console.log(Object.getPrototypeOf(fer));

prototypeChain(jose);
prototypeChain(javier);
prototypeChain(fer);
console.log(fer.nombre);

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
 
