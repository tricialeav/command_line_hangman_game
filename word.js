const Letter = require("./letter");

const Word = function(wordString) {
    this.wordString = wordString;
    // start new storage for guessed letters for current word
    this.guessedLetters = []; 
    this.letters = [];
    this.toArray();
}

// setter - adds guessed letter into guessedLetters array
Word.prototype.setGuessedLetter = function(guess){
    this.guessedLetters.push(guess);
    // holds if we found the letter at least once
    var foundLetter = false
    for(var letter in this.letters) {
        if(this.letters[letter].check(guess)) {
            foundLetter = true;
        }
    }

    return foundLetter;
}

// getter (for printing guesses for a particular word)
Word.prototype.getGuessedLetters = function(){
    return this.guessedLetters;
}

// creates new array containing new letter objects for each letter in the word string
Word.prototype.toArray = function() {
    let array = this.wordString.split('');
    for (let i = 0; i < array.length; i ++) {
        this.letters.push(new Letter(array[i]));
        this.letters[i].check();
    }
}

// Print a "hidden word" to the page, and update with each correctly guessed letter
Word.prototype.printChars = function () {
    var line = "";
    for(var i = 0; i < this.letters.length; i++ ){
        line += this.letters[i].isGuessed();
    }
    console.log(line);
}

// Prints out previously guessed letters, regardless of if they are correct or incorrect
Word.prototype.printGuesses = function () {
    var line = ""
    for(var i = 0; i < this.guessedLetters.length; i++){
        line += " " + this.guessedLetters[i];
    }
    console.log(line);
}

module.exports = Word; 