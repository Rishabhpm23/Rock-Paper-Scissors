function getComputerChoice(){
    const comChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * comChoice.length);
    return random, comChoice[random];
}
function playRound(playerSelection, computerSelection ){
    if (playerSelection === "rock"){
        if(computerSelection === "rock"){
            console.log("Tie!");
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
    

}
function playGame(){
    const numOfRounds = 3;
    for (i =1; i<= numOfRounds; i++){
        let playerSelection = prompt("enter rock paper or scissors: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("Score = Player: " + playerScore + "\tComputer: " + computerScore);
        
    } endResult();
}
let playerScore = 0;
let computerScore = 0;
console.log(playGame());


function endResult(){
    if(playerScore === computerScore){
        console.log("Its a Tie!");
    } else if(playerScore > computerScore){
        console.log("YOU WIN!");
    } else{
        console.log("YOU LOSE!");
    }
}











