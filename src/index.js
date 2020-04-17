import readlineSync from 'readline-sync';


const getUsername = () => readlineSync.question('May I have your name? ');

export default getUsername;
