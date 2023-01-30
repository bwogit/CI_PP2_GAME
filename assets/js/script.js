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

// evaluate player choice against computer choice

//update counters


//reset game
