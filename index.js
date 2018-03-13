const Word = require('./Word'); 
const inquirer = require('inquirer');
const guessLeft = 10; 
let wordList = ['back to the future', 'wonder woman', ];


inquirer.prompt([
    {
        type: 'input', 
        name: 'guess', 
        message: 'Guess a letter!'
    }
]).then(answers => { 
    this.newWord = new Word(wordList, answers.guess);
    this.newWord.printChars();
});