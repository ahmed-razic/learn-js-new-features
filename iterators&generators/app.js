//iterator example
function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const cars = ['Audi', 'BMW', 'Mercedes', 'Ford', 'VW'];

const namesArr = nameIterator(cars);

console.log(namesArr.next());
console.log(namesArr.next());
console.log(namesArr.next());
console.log(namesArr.next());
console.log(namesArr.next());
console.log(namesArr.next());

//generator example

function* sayNames() {
  yield 'Ahmed';
  yield 'Ibrahim';
  yield 'Osman';
}

const names = sayNames();

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

//create ids
function* createIDs() {
  let index = 1;

  while (true) {
    yield index++;
  }
}

const gen = createIDs();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

const genIDs = createIDs();

console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
console.log(genIDs.next().value);
