const counter = (function () {
  var count = 0;
  return {
    increment: function () {
      count++;
    },
    reset: function () {
      count = 0;
    },
    showCounter: function () {
      return count;
    },
  };
})();

const countA = counter;
const countB = counter;
countA.increment();
countB.increment();
console.log(countA.showCounter());
countA.reset();
console.log(countB.showCounter());
