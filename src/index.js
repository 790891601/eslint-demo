var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

arr.map(function(item) {
  return item;
});

eval("var x = 0");

Object.defineProperty({}, Object.prototype, {
  writable: true,
  configurable: true
});

var o = {};
var o2 = Object.create(o);
console.log(o2);
