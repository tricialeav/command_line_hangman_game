const Word = require('./word'); 
const inquirer = require('inquirer');
const guessLeft = 10; 
let testWord = 'farts';
let newWord = new Word(testWord);

inquirer.prompt([
    {
        type: 'input', 
        name: 'guess', 
        message: 'Guess a letter!'
    }
]).then(answers => { 
     
    // if (Letter.guessed === false){
    //     guessLeft -= 1; 
    //     console.log('That is incorrect. You have ' + guessLeft + ' guess(es) remaining.');
    // }
});