/*jshint esversion: 6 */
// JavaScript for the game logic

/* Variables for tracking wins, losses */
let wins = 0;
let losses = 0;
/* Add event listeners for the buttons */
        
document.getElementById("rock").addEventListener("click", function() {
  play("rock");
});
document.getElementById("paper").addEventListener("click", function() {
  play("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
  play("scissors");
});
document.getElementById("reset").addEventListener("click", resetGame) ;

  /**
  * - Function for playing the game takes and argument 'playerChoice', 
      which is the player's selected option.
      Compare choices and determine whether there is a winner or a tie
    - Sends an alert if computer wins 3 times then resets the game
  */
function play(playerChoice) {
  let computerChoice = Math.random();
  if (computerChoice < 0.34) {
      computerChoice = "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
            computerChoice = "scissors";
          }
  document.getElementById("computerChoice").innerHTML = "Computer Choice: " + computerChoice;
          
    if (playerChoice === computerChoice) {
    // Tie
      document.getElementById("result").innerHTML = `You both chose ${playerChoice} It's a Tie!`;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
    ) {
    // Player wins
    wins++;
    document.getElementById("result").innerHTML = playerChoice+ " beats " + computerChoice + " : You Win! ";
    } else {
      // Player loses
        losses++;
        document.getElementById("result").innerHTML =computerChoice+" beats "+ playerChoice + " : Computer wins!";
        }
          
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
          
        if (losses === 3) {
            resetGame();
            alert("Game over!");
  }

/**
* function endGame
*/
          
function endGame() {
          document.getElementById("playerChoice").innerHTML = "";
          document.getElementById("computerChoice").innerHTML = "";
          document.getElementById("result").innerHTML = "";
}}

/**
* Resets wins, losses, playerChoice, computerChoice, results values to pre game conditions
*/
function resetGame() {
  wins = 0;
  losses = 0;
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("playerChoice").innerHTML = "";
  document.getElementById("computerChoice").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

// Call the quote of the day API
fetch("https://api.quotable.io/random")
.then(response => response.json())
.then(data => {
    let quote = data.content;
    let author = data.author;
    document.getElementById("quote").innerHTML = `Quote of the day - "${quote}" - ${author}`;
});

/**
 * Display the rules of the RPS game onclick
 */
function gameHelp() {
  let message = `
          <img src="assets/images/rps_rules.jpg" alt="Rules of the rock paper scissors game">
         
          <a href="index.html" class="button">Back to Game</a>
          `;
  document.getElementById("game_area").innerHTML = message;
}