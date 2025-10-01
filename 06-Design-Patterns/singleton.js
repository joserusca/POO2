const Singleton = (function () {
  let instance;
  return function () {
    if (!instance) instance = {};
    return instance;
  };
})();

const a = Singleton();
const b = Singleton();
console.log(a === b); // true
