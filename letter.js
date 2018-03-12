const Letter = function(character) {
    this.character = character; 
    this.correctGuess = false; 
}

Letter.prototype.isGuessed = function() {
    if (correctGuess === true) {
        console.log(character + ''); 
    } else {
        console.log('*' + '')
    }
}

Letter.prototype.check = function (guessedCharacter) {
    if (guessedCharacter === character) {
        correctGuess = true;
         console.log('[LOG] This character is in the hidden word. Guessed = true.')
    } else {
        console.log('[LOG] This character is not in the hidden word.')
    }
}

module.exports = Letter; 