const Word = require('./Word'); 
const inquirer = require('inquirer');
const guessLeft = 10; 
let wordList = ['back to the future', 'wonder woman'];


inquirer.prompt([
    {
        type: 'input', 
        name: 'guess', 
        message: 'Guess a letter!'
    }
]).then(answers => { 
    let randomWord = Math.floor(Math.random() * (wordList.length + 1));
    this.newWord = new Word(wordList[randomWord], answers.guess);
    this.newWord.printChars();
});