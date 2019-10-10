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

//function to catch repeat letters and alert user accordingly
function addLetter (userKeyPress) {


    var repeatGuess = userGuess.some(function(item){
        return item === userKeyPress;
    })

    if (repeatGuess) {
        alert(userKeyPress + " already guessed. Try again!");
    } 
    else {
        userGuess.push(userKeyPress);
        console.log(userGuess);

        //show user's input on page
        showUserGuess();
        //is user's input a match to computer guess
        guessMatch(userKeyPress);
    }
}

//Show letters guessed on page
function showUserGuess() {
    var tempStr = userGuess.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

//Conditions for whether you win or lose are written here
function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!");
        wins++;
        showWins();
        resetVariables();

    } else if (guessLeft === 0) {
        alert("YOU LOSE! GOOD DAY SIR! (...or try again)");
        losses++;
        showLosses();
        resetVariables();

    } else {
        guessLeft = guessLeft - 1;
        showGuessesRemaining();
    }
}

//Show total wins on page
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//Show total losses on page
function showLosses() {
    document.getElementById("numLosses").innerHTML = losses;
}

//Show guesses remaining on page
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessLeft + 1;
}

//Reset variables for next game
function resetVariables () {
    userGuess = [];
    guessLeft = 10;
    computerGuess = String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );
    console.log(computerGuess);
}
