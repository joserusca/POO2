function EmpleadoNulo() {
  this.calcularSueldo = () => 0;
}

function Empleado(salario) {
  this.salarioBasico = salario;
  this.calcularSueldo = () => this.salarioBasico;
}

function getEmpleado(obj) {
  return obj === "Empleado" ? new Empleado(1000) : new EmpleadoNulo();
}

var juan = new Empleado(800000);

console.log(juan.calcularSueldo());

console.log(
  ["Empleado", null].map((item) => getEmpleado(item).calcularSueldo())
);
