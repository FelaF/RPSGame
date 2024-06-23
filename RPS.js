function getComputerChoice(){
    let Values = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
//console.log(`${randomNumber} is the randomNumber variable`);
    let computerChoice = Values.at(randomNumber);
    console.log(`${computerChoice} is what the computer chose.`);
    return computerChoice;
}
let w,x,y,z;

function getHumanChoice(){
    let humanChoice = prompt("What will you be throwing?: ");
    console.log(`${humanChoice} is what you will throw.`);
    return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice){
    let Winner = ""
    Playee = ['Computer', 'Human', 'Niether'];
    if(computerChoice == humanChoice || humanChoice == ""){
        Winner = Playee[2]
        
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Scissors'){
        Winner = Playee[0]
        computerScore += 1
        console.log("Rock breaks Scissors")
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Rock'){
        Winner = Playee[0]
        computerScore += 1
        console.log("Paper covers Rock")
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Rock'){
        Winner = Playee[1]
        humanScore += 1
        console.log("Rock breaks Scissors")
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Paper'){
        Winner = Playee[1]
        humanScore += 1
        console.log("Paper covers Rock")
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Paper'){
        Winner = Playee[0]
        computerScore += 1
        console.log("Scissors cuts Paper")
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Scissors'){
        Winner = Playee[1]
        humanScore += 1
        console.log("Scissors cuts paper")
    }
    console.log(`${Winner} is the Winner`)
    return Winner
}
function callScore(){
    console.log(`The score is Human:${humanScore} to Computer:${computerScore}`)
}


function playGame(){
    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()
    z = playRound(computerSelection, humanSelection)
    roundOneScore = callScore()
    const humanSelection2 = getHumanChoice()
    const computerSelection2 = getComputerChoice()
    z = playRound(computerSelection2, humanSelection2)
    roundOneScore = callScore()
    const humanSelection3 = getHumanChoice()
    const computerSelection3 = getComputerChoice()
    z = playRound(computerSelection3, humanSelection3)
    roundOneScore = callScore()
    const humanSelection4 = getHumanChoice()
    const computerSelection4 = getComputerChoice()
    z = playRound(computerSelection4, humanSelection4)
    roundOneScore = callScore()
    const humanSelection5 = getHumanChoice()
    const computerSelection5 = getComputerChoice()
    z = playRound(computerSelection5, humanSelection5)
    roundOneScore = callScore()
    let GameWinner;
    if (humanScore > computerScore){
        GameWinner = "Human";
    }
    else if (computerScore > humanScore){
        GameWinner = "Computer ";
    }
    console.log(`Overall, Winner is ${GameWinner}`);

}
x = playGame()