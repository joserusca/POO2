var perro = {
  nombre: "Lasie",
  peso: 30,
  colorPelo: "Canela",
};

var saludar = {
  saludar: function () {
    return "Guaaauu!!!!";
  },
};

var caminar = {
  caminar: function (pasos) {
    return pasos * 100;
  },
};

var perro = Object.assign(perro, saludar, caminar);
// var perro = { ...perro, ...saludar, ...caminar };

console.log(perro.saludar());
console.log(perro.caminar(10));
console.log(perro);
