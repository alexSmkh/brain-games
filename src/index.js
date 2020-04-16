import readlineSync from 'readline-sync';


export const getUsername = () => readlineSync.question('May I have your name? ');