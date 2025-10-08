var Javier = (function (nombre, apellido, fechaNacimiento) {
  var Persona = {};

  var _nombre = nombre;
  var _apellido = apellido;
  var _fechaNacimiento = fechaNacimiento;

  Persona.nombreCompleto = function () {
    return (
      _apellido +
      ", " +
      _nombre +
      " (" +
      _fechaNacimiento.toLocaleDateString() +
      ") "
    );
  };

  return Persona;
})("Javier", "Baez", new Date(2010, 10, 10));

console.log(Javier.nombreCompleto());
