function getComputerChoice(){
    const comChoice = ["rock","paper","scissors"];
    const random = Math.floor(Math.random() * comChoice.length);
    return random, comChoice[random];
}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection){
    result.innerHTML = '';
    let computerSelection = getComputerChoice();
    if (playerSelection === "rock"){
        if(computerSelection === "rock"){
            //console.log("Tie!");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'Round Tied';
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else if(computerSelection === "paper"){
            //console.log("You Lose! Paper beats Rock");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Lose! Paper beats Rock';
            computerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else{
            //console.log("You Win! Rock beats Scissors");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Win! Rock beats Scissors';
            playerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        }
    } else if (playerSelection === "paper"){
        if(computerSelection === "paper"){
            //console.log("Tie!");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'Round Tied';
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else if(computerSelection === "scissors"){
            //console.log("You Lose! Scissors beats Paper");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Lose! Scissors beats Paper';
            computerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else{
            //console.log("You Win! Paper beats Rock");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Win! Paper beats Rock';
            playerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        }
    } else{
        if(computerSelection === "scissors"){
            //console.log("Tie!");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'Round Tied';
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else if(computerSelection === "rock"){
            //console.log("You Lose! Rock beats Scissors");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Lose! Rock beats Scissors';
            computerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        } else{
            //console.log("You Win! Scissors beats Paper");
            const score = document.querySelector('#score');
            const points = document.querySelector('#points');
            score.innerHTML = 'You Win! Scissors beats Paper';
            playerScore++;
            points.innerHTML = "Score = Player: " + playerScore + "\nComputer: " + computerScore ;
        }
    }
    //console.log("Score = Player: " + playerScore + "\tComputer: " + computerScore);
    if(playerScore === 5 || computerScore === 5){
        endResult();
        playerScore = 0;
        computerScore = 0;
    }
}
function endResult(){
    if(playerScore === computerScore){
        //console.log("Its a Tie!");
        const result = document.querySelector('#result');
        result.innerHTML = 'GAME TIED!!'
    } else if(playerScore > computerScore){
        //console.log("YOU WIN!");
        const result = document.querySelector('#result');
        result.innerHTML = 'YOU WON THE GAME!!'
    } else{
        //console.log("YOU LOSE!");
        const result = document.querySelector('#result');
        result.innerHTML = 'YOU LOST THE GAME!!'
    }
}










