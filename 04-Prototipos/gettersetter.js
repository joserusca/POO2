var javier = {
    fechaNacimiento: new Date(),
    get nombreCompleto() {
        this.nombre = this.nombre || 'nombre';
        return this.apellido + ", " + this.nombre + " - " + this.fechaNacimiento.toLocaleDateString();
    },
    set nombreCompleto(value) {
        var datos = value.split(', ');
        this.nombre = datos[1];
        this.apellido = datos[0];
    }
}

console.log(javier.nombreCompleto);
javier.nombreCompleto = "Sanchez, Carlos";
console.log(javier.nombreCompleto);