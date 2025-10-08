const javy = {
  nombre: "Javier",
  apellido: "Baez",
  set nombreCompleto(value) {
    const arrValue = value.split(",");
    this.apellido = arrValue[0];
    this.nombre = arrValue[1];
  },
  get nombreCompleto() {
    return this.apellido + "," + this.nombre;
  },
};

console.log(javy.nombreCompleto);
javy.nombreCompleto = "Fernandez,Carlos";
console.log(javy.nombreCompleto);
