// JavaScript for the game logic

        // Variables for tracking wins, losses
        let wins = 0;
        let losses = 0;
       
  
        // Add event listeners for the buttons
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

        // Function for playing the game
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
          
          // Compare choices and determine winner
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
            document.getElementById("result").innerHTML =computerChoice+" beats "+ playerChoice + " : Loooser!";
          }
  
          // Update wins and losses counter
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("losses").innerHTML = losses;
  
          // Check for 3 wrong moves
          if (losses === 3) {
            // endGame();
            resetGame();
            alert("Game over!");
            
          }

         // function endGame
         function endGame() {
          document.getElementById("playerChoice").innerHTML = "";
          document.getElementById("computerChoice").innerHTML = "";
          document.getElementById("result").innerHTML = "";
          // rock_div.removeAttribute("disabled");  paper_div.removeAttribute("disabled");  scissors_div.removeAttribute("disabled");
          // wins = 0;
          // losses = 0;
        }
        }
        // function reset game
        function resetGame() {
          wins = 0;
          losses = 0;
          document.getElementById("wins").innerHTML = wins;
          document.getElementById("losses").innerHTML = losses;
          document.getElementById("playerChoice").innerHTML = "";
          document.getElementById("computerChoice").innerHTML = "";
          document.getElementById("result").innerHTML = "";
          
        }