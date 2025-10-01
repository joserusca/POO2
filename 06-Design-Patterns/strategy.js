const add = { execute: (arr) => arr.reduce((a, b) => a + b, 0) };
const multiply = { execute: (arr) => arr.reduce((a, b) => a * b, 1) };

function createContext(strategy) {
  let strat = strategy;
  return {
    setStrategy: (s) => (strat = s),
    execute: (arr) => strat.execute(arr),
  };
}

const c = createContext(add);
console.log(c.execute([1, 2, 3])); // 6
c.setStrategy(multiply);
console.log(c.execute([1, 2, 3])); // 6
