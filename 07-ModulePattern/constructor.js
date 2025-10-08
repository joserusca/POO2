function Persona(props) {
  if (!(this instanceof Persona)) return new Persona(props);

  this.apellido = props.apellido;
  this.nombre = props?.nombre ? props.nombre : "";
  this.fechaNacimiento = props.fechaNacimiento;

  this.nombreCompleto = function () {
    return (
      this.apellido +
      ", " +
      this.nombre.toString() +
      " (" +
      this.fechaNacimiento.toLocaleDateString() +
      ") "
    );
  };
}

var Javier = new Persona({
  apellido: "Baez",
  fechaNacimiento: new Date(2005, 10, 10),
});

console.log(Javier.nombreCompleto());
console.log(Javier.constructor.name);
console.log(Object.getPrototypeOf(Javier));
