const Letter = require("./letter");

const Word = function(wordString) {
    this.wordString = wordString;
    this.toArray();
}

Word.prototype.toArray = function() {
    let array = this.wordString.split('');
    console.log(array);
    for (let i = 0; i < array.length; i ++) {
        let newletter = new Letter(array[i]);
    }
}

Word.prototype.wordString = function() {
    Letter.isGuessed(); 
}

Word.prototype.callGuess = function(character) {
    Letter.check(character); 
}

module.exports = Word; 

