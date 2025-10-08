function Persona(props) {
  var Persona = { ...props };

  Persona.nombreCompleto = function () {
    return (
      this.apellido +
      ", " +
      this.nombre +
      " (" +
      this.fechaNacimiento.toLocaleDateString() +
      ") "
    );
  };

  return Persona;
}

//var Javier = Persona("Javier", "Baez", new Date(2005, 10, 10));
var Javier = new Persona({
  nombre: "Javier",
  apellido: "Baez",
  fechaNacimiento: new Date(2005, 10, 10),
});

console.log(Javier.nombreCompleto());
console.log(Javier.constructor.name);
console.log(Object.getPrototypeOf(Javier));
