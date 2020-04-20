const isEven = (number) => number % 2 === 0;

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export { isEven, getRandomNumber };
