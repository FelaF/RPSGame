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
    if(computerChoice == humanChoice){
        Winner = Playee[2]
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Scissors'){
        Winner = Playee[0]
        computerScore += 1
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Rock'){
        Winner = Playee[0]
        computerScore += 1
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Rock'){
        Winner = Playee0[1]
        humanScore += 1
    }
    else if(computerChoice == 'Rock' && humanChoice == 'Paper'){
        Winner = Playee[1]
        humanScore += 1
    }
    else if(computerChoice == 'Scissors' && humanChoice == 'Paper'){
        Winner = Playee[0]
        computerScore += 1
    }
    else if(computerChoice == 'Paper' && humanChoice == 'Scissors'){
        Winner = Playee[1]
        humanScore += 1
    }
    console.log(`${Winner} is the Winner`)
    return Winner
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()
z = playRound(computerSelection, humanSelection)
