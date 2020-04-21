export const isEven = (number) => number % 2 === 0;

export const getRandomNumber = (
  min = 0,
  max = 100,
) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomOperator = () => {
  let randomOperator;
  switch (getRandomNumber(1, 3)) {
    case 1:
      randomOperator = '+';
      break;
    case 2:
      randomOperator = '-';
      break;
    case 3:
      randomOperator = '*';
      break;
    default:
      break;
  }
  return randomOperator;
};
