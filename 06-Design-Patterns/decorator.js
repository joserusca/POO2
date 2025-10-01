function coffee() {
  return { cost: () => 5, description: () => "Café" };
}

function milkDecorator(coffeeObj) {
  return {
    cost: () => coffeeObj.cost() + 2,
    description: () => coffeeObj.description() + " + leche",
  };
}

function sugarDecorator(coffeeObj) {
  return {
    cost: () => coffeeObj.cost() + 1,
    description: () => coffeeObj.description() + " + azúcar",
  };
}

// Café simple
let c = coffee();
console.log(c.cost(), c.description()); // 5 'Café'

// Café con leche
let milkCoffee = milkDecorator(c);
console.log(milkCoffee.cost(), milkCoffee.description()); // 7 'Café + leche'

// Café con leche y azúcar
let milkSugarCoffee = sugarDecorator(milkDecorator(c));
console.log(milkSugarCoffee.cost(), milkSugarCoffee.description()); // 8 'Café + leche + azúcar'

// Café solo con azúcar
let sugarCoffee = sugarDecorator(c);
console.log(sugarCoffee.cost(), sugarCoffee.description()); // 6 'Café + azúcar'
