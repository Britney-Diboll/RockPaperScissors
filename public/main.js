
const main = () => {
  
}

document.addEventListener('DOMContentLoaded', main)

//Player 1

const submitRock1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Rock";
}

const submitPaper1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Paper";
}

const submitScissors1 = () =>{
  document.querySelector("#resultPlayer1").textContent = "Scissors";
}

//Player 2
const submitRock2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Rock";
}

const submitPaper2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Paper";
}

const submitScissors2 = () =>{
  document.querySelector("#resultPlayer2").textContent = "Scissors";
}