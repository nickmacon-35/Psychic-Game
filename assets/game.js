//here we define our global variables
var userGuess = [];
var guessLeft = 9;
var wins = 0;
var losses = 0;

//use Math.random method along with String.fromCharCode method to generate a random letter for the computer
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);


//define a variable keyPress 
document.onkeydown = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();

    document.getElementById('playersGuess').innerHTML = keyPress;
    addLetter(keyPress);
}

//function to catch repeat letters and/or add players guess to userGuess string
function addLetter (userKeyPress) {


    var repeatGuess = userGuess.some(function(item){
        return item === userKeyPress;
    })

    //alert player if the above code is true.
    if (repeatGuess) {
        alert(userKeyPress + " already guessed. Try again!");

        //if it is not a repeat guess, check if it's in word
    } 
    else {
        userGuess.push(userKeyPress);
        console.log(userGuess);

        //show user's input in browser
        showUserGuess();
        //is user's input a match to computer guess
        guessMatch(userKeyPress);
    }

}

//function to show letters guessed in browser
function showUserGuess() {
    var tempStr = userGuess.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins = wins + 1;
        showWins();
        //toggleGame();

    } else if (guessLeft === 0) {
        alert("YOU LOSE! GOOD DAY SIR! (...or try again)");
        losses = losses + 1
        showLosses();
        resetVariables ();

    } else {
        guessLeft = guessLeft - 1;
        showGuessesRemaining();
    }
}

//function to show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//function to show losses
function showLosses() {
    document.getElementById("numLosses").innerHTML = losses;
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessLeft + 1;
}


function resetVariables () {
    userGuess = [];
    guessLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
    showLosses();
}



startGame();