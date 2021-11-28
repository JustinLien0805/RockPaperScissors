const game = () => {
  let pscore = 0;
  let cscore = 0;

  //start game
  const startGame = () => {
    const playbtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const matchScreen = document.querySelector(".match");

    playbtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      matchScreen.classList.add("fadeIn");
    });
  };

  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hands");
    const computerHand = document.querySelector(".computer-hands");
    const hands = document.querySelectorAll(".hands img");

    //let animation run every time
    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //computer option
    const comOptions = ["rock", "paper", "scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const comNumber = Math.floor(Math.random() * 3);
        const comChoice = comOptions[comNumber];

        //change img and text after animation
        setTimeout(() => {
          compareHand(this.textContent, comChoice);
          playerHand.src = `./asset/${this.textContent}.png`;
          computerHand.src = `./asset/${comChoice}.png`;
        }, 2000);

        //animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });

    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pscore;
      computerScore.textContent = cscore;

      if (playerScore.textContent == 5 || computerScore.textContent == 5) {
        pscore = 0;
        cscore = 0;
        playerScore.textContent = pscore;
        computerScore.textContent = cscore;
      }
    };

    const compareHand = (playerChoice, comChoice) => {
      const winner = document.querySelector(".winner");
      if (playerChoice === comChoice) {
        winner.textContent = "It's a tie";
        return;
      }
      if (playerChoice === "rock") {
        if (comChoice === "scissors") {
          winner.textContent = "Lucky You";
          pscore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Fucking Looser";
          cscore++;
          updateScore();
          return;
        }
      }
      if (playerChoice === "paper") {
        if (comChoice === "rock") {
          winner.textContent = "Lucky You";
          pscore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Fucking Looser";
          cscore++;
          updateScore();
          return;
        }
      }
      if (playerChoice === "scissors") {
        if (comChoice === "paper") {
          winner.textContent = "Lucky You";
          pscore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Fucking Looser";
          cscore++;
          updateScore();
          return;
        }
      }
    };
  };

  startGame();
  playMatch();
};

game();
