function getComputerChoice(){
    let Values = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
//console.log(`${randomNumber} is the randomNumber variable`);
    let computerChoice = Values.at(randomNumber);
    console.log(`Computer throws ${computerChoice}.`);
    return computerChoice;
}
let w,x,y,z;
let button1 = document.querySelector(".B1");
let button2 = document.querySelector(".B2");
let button3 = document.querySelector(".B3");
let GameResult = document.querySelector("#Results")
let Scoring = document.querySelector("#Score")
let FinalScore  = document.querySelector("#FinalWin")

let humanScore = 0;
let computerScore = 0;
let gameComment;
function playRound(computerChoice, humanChoice){
    let Winner = ""
    Playee = ['Computer', 'Human', 'Niether'];
    if(computerChoice == humanChoice || humanChoice == ""){
        Winner = Playee[2]
        gameComment = (`The Same Throw: No Winner.`)
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Scissors'){
        Winner = Playee[0]
        computerScore += 1
        gameComment = (`Rock breaks Scissors: ${Winner} Wins this round!`)
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Rock'){
        Winner = Playee[0]
        computerScore += 1
        gameComment = (`Paper covers Rock: ${Winner} Wins this round!`)
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Rock'){
        Winner = Playee[1]
        humanScore += 1
        gameComment = (`Rock breaks Scissors: ${Winner} Wins this round!`)
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Paper'){
        Winner = Playee[1]
        humanScore += 1
        gameComment = (`Paper covers Rock: ${Winner} Wins this round!`)
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Paper'){
        Winner = Playee[0]
        computerScore += 1
        gameComment = (`Scissors cuts Paper: ${Winner} Wins this round!`)
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Scissors'){
        Winner = Playee[1]
        humanScore += 1
        gameComment =(`Scissors cuts paper: ${Winner} Wins this round!`)
    }
    GameResult.textContent = gameComment
}
let GameWinner;

function updateScore(){
    Scoring.textContent = `Human: ${humanScore} Computer: ${computerScore}`
    if (humanScore > computerScore){
        GameWinner = "Human";
    }
    if (computerScore > humanScore){
        GameWinner = "Computer";
    } 
    if(computerScore == 5){
        console.log("COMPUTER WINS")
        FinalScore.textContent = "COMPUTER IS WINNER!"
    }
    if(humanScore == 5){
        console.log("HUMAN WINS!")
        FinalScore.textContent = "HUMAN IS WINNER!"
    }

};

///Between playgame and playround functionality 
button1.addEventListener('click', () => {
    console.log('You threw Paper')
    playRound(getComputerChoice(),"Paper");
    updateScore()
});

button2.addEventListener('click', () => {
    console.log('You threw Rock')
    playRound(getComputerChoice(),"Rock");
    updateScore()
});

button3.addEventListener('click', () => {
    console.log('You threw Scissors')
    playRound(getComputerChoice(), "Scissors");
    updateScore()

});