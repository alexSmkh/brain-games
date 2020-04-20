const cons = (element1, element2) => (func) => func(element1, element2);

// eslint-disable-next-line no-unused-vars
const car = (pair) => pair((element1, element2) => element1);

const cdr = (pair) => pair((element1, element2) => element2);

export { cons, car, cdr };
