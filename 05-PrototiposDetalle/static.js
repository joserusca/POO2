var Persona = (function(){
    var contador = 0;
    newPersona = function(nombre, apellido, fechaNacimiento) {
        var fecha = fechaNacimiento;
        this.nombre = nombre;
        this.apellido = apellido;
        contador+=1;
        this.nombreCompleto = function() {
            return this.apellido + ", " + this.nombre;
        }
    
        var calcularEdad = function(){
                return parseInt((new Date() - fecha) / 31536000000);
        }
    
        this.getEdad = calcularEdad();

        this.totalPersonas = function() {
            return contador;
        }
    }
    return newPersona;
})();

    

var jose = new Persona("Jose", "Rusca", new Date(1999, 12, 12));
var javier = new Persona("Javier", "Baez", new Date(1999, 12, 12));
console.log(jose.totalPersonas());