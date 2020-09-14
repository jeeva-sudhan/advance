const game = () => {
    let pScore=0;

    const startGame = () => {
        const playBtn = document.querySelector(".parent button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");
        const button = document.querySelector(".rules-button");
    
        playBtn.addEventListener("click", () => {
          introScreen.classList.add("fadeIn");
          match.classList.add("fadeIn");
          button.classList.add("fadeOut");

        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const computerOptions = ["rock", "paper", "scissor"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoice = computerOptions[computerNumber];


            setTimeout(() => {
                compareHands(this.textContent, computerChoice);
            }, 500);
        });
      });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".score p");
        playerScore.textContent = pScore;
    };
    
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
          winner.textContent = "IT'S A TIE!!";
          return;
        }
        //Rock
        if (playerChoice === "rock") {
          if (computerChoice === "scissor") {
            winner.textContent = "YOU WON!!";
            pScore++;
            updateScore();
            return;
          } 
          else {
            winner.textContent = "***YOU LOSE!!***";
            return;
          }
        }
        //Paper
        if (playerChoice === "paper") {
          if (computerChoice === "scissor") {
            winner.textContent = "***YOU LOSE!!***";
            return;
          } 
          else {
            winner.textContent = "YOU WON!!";
            pScore++;
            updateScore();
            return;
          }
        }
        //Scissor
        if (playerChoice === "scissor") {
          if (computerChoice === "rock") {
            winner.textContent = "***YOU LOSE!!***";
            return;
          } 
          else {
            winner.textContent = "YOU WON!!";
            pScore++;
            updateScore();
            return;
          }
        }
      };

      const endGame = () =>{
        const playAgain = document.querySelector(".play-again");
        const winner = document.querySelector(".winner");
        playAgain.addEventListener("click", () => {
            winner.textContent="Select an option";
        });
      };
    
    
    startGame();
    playMatch();
    endGame();

};

game();


