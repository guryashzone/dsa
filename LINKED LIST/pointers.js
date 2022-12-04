const obj1 = { a: true };
const obj2 = obj1;

obj1.b = true;
obj2.a = "Booyah!";

console.log('obj1', obj1);
console.log('obj2', obj2);