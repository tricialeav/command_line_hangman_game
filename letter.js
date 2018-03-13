const Letter = function(character) {
    this.character = character;   
    this.correctGuess = false; 
}

// Checks to see if the underlying letter has been guessed. Displays either a * for hasn't been guessed or the guessed letter
Letter.prototype.isGuessed = function() {
    if (this.correctGuess === true) {
        return (this.character + ' '); 
    } else {
         return ('*' + ' ');
    }
}

// Checks if the letter has previously been guessed correctly
Letter.prototype.hasBeenGuessed = function() {
    return this.correctGuess;
}

// Compares the guessed letter to the underlying letters in the object array
Letter.prototype.check = function (guessLetter) {
    if (guessLetter === this.character) {
        this.correctGuess = true;
    }
    return this.correctGuess;
}

module.exports = Letter; 