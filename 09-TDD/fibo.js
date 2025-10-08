function fibo(value) {
  if (value == 0) return 0;
  const values = Array.from({ length: value + 1 }, (v, i) => i);
  console.log(values);
  return values[0] + values[1];
}
// 0,1,2,3,4,5,6
// 0,1,1,2,3,5,8

module.exports = fibo;
