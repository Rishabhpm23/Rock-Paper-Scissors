function getComputerChoice(){
    const comChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * comChoice.length);
    return random, comChoice[random];
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection){
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock"){
        if(computerSelection === "rock"){
            //console.log("Tie!");
            const score = document.getElementById('score');
            score.textContent = 'Round Tied';
            
        } else if(computerSelection === "paper"){
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        } else{
            console.log("You Win! Rock beats Scissors");
            playerScore++;
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "paper"){
            console.log("Tie!");
        } else if(computerSelection === "scissors"){
            console.log("You Lose! Scissors beats Paper");
            computerScore++
        } else{
            console.log("You Win! Paper beats Rock");
            playerScore++;
        }
    } else{
        if(computerSelection === "scissors"){
            console.log("Tie!");
        } else if(computerSelection === "rock"){
            console.log("You Lose! Rock beats Scissors");
            computerScore++;
        } else{
            console.log("You Win! Scissors beats Paper");
            playerScore++;
        }
    }
    console.log("Score = Player: " + playerScore + "\tComputer: " + computerScore);
    if(playerScore === 5 || computerScore === 5){
        endResult();
        playerScore = 0;
        computerScore = 0;
    }
}
function endResult(){
    if(playerScore === computerScore){
        console.log("Its a Tie!");
    } else if(playerScore > computerScore){
        console.log("YOU WIN!");
    } else{
        console.log("YOU LOSE!");
    }
}










