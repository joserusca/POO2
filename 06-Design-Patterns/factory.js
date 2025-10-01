// Constructores de los diferentes tipos
function Admin(name) {
  this.role = "admin";
  this.name = name;
}
Admin.prototype.sayHello = function () {
  return `Hola, soy ${this.name} y soy administrador.`;
};

function Guest(name) {
  this.role = "guest";
  this.name = name;
}
Guest.prototype.sayHello = function () {
  return `Hola, soy ${this.name} y soy invitado.`;
};

function Member(name) {
  this.role = "member";
  this.name = name;
}
Member.prototype.sayHello = function () {
  return `Hola, soy ${this.name} y soy miembro.`;
};
// La función Factory
function UserFactory(role, name) {
  switch (role) {
    case "admin":
      return new Admin(name);
    case "guest":
      return new Guest(name);
    case "member":
      return new Member(name);
    default:
      throw new Error("Rol no válido");
  }
}

// Uso del patrón Factory
var user1 = UserFactory("admin", "Ana");
var user2 = UserFactory("guest", "Luis");
var user3 = UserFactory("member", "Carlos");

console.log(user1.sayHello()); // Hola, soy Ana y soy administrador.
console.log(user2.sayHello()); // Hola, soy Luis y soy invitado.
console.log(user3.sayHello()); // Hola, soy Carlos y soy miembro.
