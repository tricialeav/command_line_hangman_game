
// Please note that any comments starting with "TODO" are unfinished portions of the assignment

const Word = require('./Word'); 
const inquirer = require('inquirer');
let guessLeft = 10; 
let wordList = ['pastries', 'sushi', 'pizza', 'cookies', 'cupcakes'];
let randomWord = Math.floor(Math.random() * (wordList.length + 1));
let newWord = new Word(wordList[randomWord]);   

function getGuess() {
    inquirer.prompt([
        {
            type: 'input', 
            name: 'guess', 
            message: 'Guess a letter!'
        }
    ]).then(answers => { 
        // after setGuessed is called, each letter will have correct or incorrect
        // setGuessedLetter will return t/f if we found the letter at least once
        if(!newWord.setGuessedLetter(answers.guess)) {

            // TODO The guessLeft is only updating if no correct guesses have been assigned. It is not accurately resetting for each letter guessed. 

            guessLeft -= 1;
            console.log(answers.guess + ' was not found! You have ' + guessLeft + ' guesses left!');
        }
        // print each character
        newWord.printChars();

        // Continue prompting for guesses as long as guesses left are above 0
        if(guessLeft > 0){
            getGuess();
        } else {
            console.log('Game over!');
        }

        // TODO construct a function to switch to a new random word if all the of letters in the current word have been guessed. 

    });
}
    
getGuess(); 