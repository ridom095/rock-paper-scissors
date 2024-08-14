var playerText = document.querySelector("#playertext");
var computerText = document.querySelector("#computertext");
var resultText = document.querySelector("#resuletext");
var draw = "Draw!";
var playerw = "You Wins!";
var computerw = "Computer Wins!";

function comchoice() {
    var choices = ["Rock", "Paper", "Scissors"];
    var ch = Math.floor(Math.random() * choices.length);
    return choices[ch];
}

function funwin(pchoice, cchoice) {
    if (pchoice === cchoice) {
        return draw;
    } else if (
        (pchoice === "Rock" && cchoice === "Scissors") ||
        (pchoice === "Paper" && cchoice === "Rock") ||
        (pchoice === "Scissors" && cchoice === "Paper")
    ) {
        return playerw;
    } else {
        return computerw;
    }
}

function playGame(pchoice) {
    var cchoice = comchoice();
    var result = funwin(pchoice, cchoice);

    playerText.textContent = "You: " + pchoice;
    computerText.textContent = "Computer: " + cchoice;
    resultText.textContent = "Result: " + result;

    if (result === playerw) {
        resultText.style.color = "green";
    } else if (result === draw) {
        resultText.style.color = "blue";
    } else {
        resultText.style.color = "red";
    }
}

function playRock() {
    playGame("Rock");
}

function playPaper() {
    playGame("Paper");
}

function playScissors() {
    playGame("Scissors");
}
