// JavaScript for the game logic

//variables for tracking wins and losses
let wins = 0;
let losses = 0;

// Event Listeners for the Buttons


//function for playing the game
function play(playerChoice) {
    // Generate computer choice
    let computerChoice = Math.random();
    if (computerChoice < 0.34) {
      computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }
    document.getElementById("computerChoice").innerHTML = "Computer Choice: " + computerChoice;
}

// evaluate player choice against computer choice there are 3 scenarios possible
if (playerChoice === computerChoice) {
    // 1 Tie
    document.getElementById("result").innerHTML = `You both chose ${playerChoice} It's a Tie!`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    // 2 Player wins
    wins++;
    document.getElementById("result").innerHTML = playerChoice+ " beats " + computerChoice + " : You Win! ";
  } else {
    // 3 Player loses
    losses++;
    document.getElementById("result").innerHTML =computerChoice+" beats "+ playerChoice + " : Loooser!";
  }

//update counters
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;

//game ends after computer wins 3 times
if (losses === 3) {
    // endGame();
    resetGame();
    alert("Game over!");
}

//reset game
function resetGame() {
    wins = 0;
    losses = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("playerChoice").innerHTML = "";
    document.getElementById("computerChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    
  }