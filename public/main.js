
const main = () => {
  
}

document.addEventListener('DOMContentLoaded', main)

//Player 1

const submitRock1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Rock";
  document.querySelector("#paperButton1").disabled = true;
  document.querySelector("#scissorsButton1").disabled = true;
}

const submitPaper1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Paper";
  document.querySelector("#rockButton1").disabled = true;
  document.querySelector("#scissorsButton1").disabled = true;
}

const submitScissors1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Scissors";
  document.querySelector("#paperButton1").disabled = true;
  document.querySelector("#rockButton1").disabled = true;
}


//Player 2
const submitRock2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Rock";
  document.querySelector("#paperButton2").disabled = true;
  document.querySelector("#scissorsButton2").disabled = true;
}

const submitPaper2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Paper";
  document.querySelector("#rockButton2").disabled = true;
  document.querySelector("#scissorsButton2").disabled = true;
}

const submitScissors2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Scissors";
  document.querySelector("#paperButton2").disabled = true;
  document.querySelector("#rockButton2").disabled = true;
}

//Battle Button
const playGame = () => {
  let player1 = document.querySelector("#resultPlayer1").textContent;
  let player2 = document.querySelector("#resultPlayer2").textContent;

  if (player1 === player2) {
    window.alert("TIE");
  } else if (player1 === "Rock" && player2 === "Paper") {
    window.alert("Player 2 wins!");
  } else if (player1 === "Rock" && player2 === "Scissors") {
    window.alert("Player 1 wins!");
  } else if (player1 === "Paper" && player2 === "Rock") {
    window.alert("Player 1 wins!");
  } else if (player1 === "Paper" && player2 === "Scissors") {
    window.alert("Player 2 wins!");
  } else if (player1 === "Scissors" && player2 === "Rock") {
    window.alert("Player 2 wins!");
  } else if (player1 === "Scissors" && player2 === "Paper") {
    window.alert("Player 1 wins!");
  }
}

const reset = () => {
  document.querySelector("#rockButton1").disabled = false;
  document.querySelector("#rockButton2").disabled = false;
  document.querySelector("#paperButton1").disabled = false;
  document.querySelector("#paperButton2").disabled = false;
  document.querySelector("#scissorsButton1").disabled = false;
  document.querySelector("#scissorsButton2").disabled = false;
  document.querySelector("#resultPlayer1").textContent = "Choose";
  document.querySelector("#resultPlayer2").textContent = "Choose";
}