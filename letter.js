const Letter = function(character, guessedLetter) {
    this.character = character;  
    this.guessedLetter = guessedLetter; 
    this.correctGuess = false; 
}

Letter.prototype.isGuessed = function() {
    if (this.correctGuess === true) {
        return (this.character + ' '); 
    } else {
         return ('*' + ' ');
    }
}

Letter.prototype.check = function () {
    if (this.guessedLetter === this.character) {
        this.correctGuess = true;
    } 
}

module.exports = Letter; 