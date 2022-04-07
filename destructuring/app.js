let a, b;
[a, b] = [100, 200];
[num1, num2, num3] = [1, 2];

console.log(a, b);
console.log(num1, num2, num3);

[a, b, ...rest] = [100, 200, 300, 400, 500, 600, 700];

console.log(rest);
console.log(a, b);

({ a, b, ...rest } = { a: 111, b: 222, c: 333, d: 444, e: 555 });

console.log(a);
console.log(b);
console.log(rest);
console.log(rest.d);

const people = ['ddd', 'rrr', 'ttt'];
const [p1, p2, p3] = people;
console.log(p1, p2, p3);

const person = {
  name: '22222',
  age: 343,
  city: 'asdfds',
  gender: 'fgfgdf',
  sayHello: function () {
    console.log('Hello');
  },
};

const { name, city, sayHello } = person;

console.log(name, city);
sayHello();
