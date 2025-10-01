class Singleton {
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    this.value = Math.random();
    Singleton.instance = this;
  }
  getValue() {
    return this.value;
  }
}

// Ejemplo de uso:
const singletonA = new Singleton();
const singletonB = new Singleton();

console.log(singletonA === singletonB); // true
console.log(singletonA.getValue()); // Por ejemplo: 0.123456
console.log(singletonB.getValue()); // El mismo valor que singletonA
