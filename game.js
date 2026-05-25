// Total Attempts

let attempts = 5;

// Go To Player 2 Screen

function goToPlayer2(){

  document.getElementById("player1Screen")
    .classList.remove("active");

  document.getElementById("player2Screen")
    .classList.add("active");

  updateAttemptText();
}

// Update Attempts

function updateAttemptText(){

  document.getElementById("attemptText").innerHTML =
    `Attempts Left : ${attempts}`;
}

// Check Winner

function checkWinner(){

  let player1Name =
    document.getElementById("player1Name").value;

  let player1Number =
    document.getElementById("player1Number").value;

  let player2Name =
    document.getElementById("player2Name").value;

  let player2Guess =
    document.getElementById("player2Guess").value;

  let winnerPopup =
    document.getElementById("winnerPopup");

  let winnerText =
    document.getElementById("winnerText");

  let resultGif =
    document.getElementById("resultGif");

  // Reduce Attempts

  attempts--;

  updateAttemptText();

  // Win

  if(player1Number === player2Guess){

    document.getElementById("message").innerHTML = "";

    resultGif.src =
      "https://media.giphy.com/media/111ebonMs90YLu/giphy.gif";

    winnerText.innerHTML =
      `🎉 Congratulations ${player2Name} You Win! 🏆`;

    winnerText.style.color = "green";

    winnerPopup.style.display = "flex";
  }

  // Lose

  else if(attempts === 0){

    document.getElementById("message").innerHTML = "";

    resultGif.src =
      "https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif";

    winnerText.innerHTML =
      `😢 Game Over! ${player1Name} Wins`;

    winnerText.style.color = "red";

    winnerPopup.style.display = "flex";
  }

  // Wrong Guess

  else{

    document.getElementById("message").innerHTML =
      "❌ Wrong Guess! Try Again";

      document.getElementById("player2Guess").value = "";
  }
}

// Play Again

function playAgain(){

  // Reset Attempts

  attempts = 5;

  // Hide Popup

  document.getElementById("winnerPopup")
    .style.display = "none";

  // Clear Inputs

  document.getElementById("player1Name").value = "";

  document.getElementById("player1Number").value = "";

  document.getElementById("player2Name").value = "";

  document.getElementById("player2Guess").value = "";

  document.getElementById("message").innerHTML = "";

  // Back To First Screen

  document.getElementById("player2Screen")
    .classList.remove("active");

  document.getElementById("player1Screen")
    .classList.add("active");
}