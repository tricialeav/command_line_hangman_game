const Letter = require("./letter");

const Word = function(wordString, guessedLetter) {
    this.wordString = wordString;
    this.guessedLetter = guessedLetter; 
    this.letters = [];
    this.toArray();
}

Word.prototype.toArray = function() {
    let array = this.wordString.split('');
    for (let i = 0; i < array.length; i ++) {
        this.letters.push(new Letter(array[i], this.guessedLetter));
        this.letters[i].check();
        console.log(this.letters);
    }
}

Word.prototype.printChars = function () {
    var line = "";
    for(var i = 0; i < this.letters.length; i++ ){
        line += this.letters[i].isGuessed();
    }
    console.log(line);
}

module.exports = Word; 

