console.log('Hello, the game will be for 5 rounds.');
let humanScore, comScore;
function getComputerChoice() {
    let x=Math.floor(Math.random()*3);
    return x+1;
}

function getHumanChoice() {
    let x = prompt("What's your choice? (1-Rock 2-Paper 3-Scissors)");
    return x;
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 1:
            if(computerChoice==1) {
                console.log("Both chose Rock!");
            }
            else if(computerChoice==2) {
                console.log("You chose Rock, computer chose Paper. \n You lost this round!");
                comScore++;
            }
            else {
                console.log("You chose Rock, computer chose Scissors. \n You won this round!");
                humanScore++;
            }
            break;
        case 2: 
            if(computerChoice==2) {
                console.log("Both chose Paper!");
            }
            else if(computerChoice==3) {
                console.log("You chose Paper, computer chose Scissors. \n You lost this round!");
                comScore++;
            }
            else {
                console.log("You chose Paper, computer chose Rock. \n You won this round!");
                humanScore++;
            }
            break;
        case 3: 
            if(computerChoice==3) {
                console.log("Both chose Scissors!");
            }
            else if(computerChoice==1) {
                console.log("You chose Scissors, computer chose Rock. \n You lost this round!");
                comScore++;
            }
            else {
                console.log("You chose Scissors, computer chose Paper. \n You won this round!");
                humanScore++;
            }
            break;
    }
}

function playGame() {
    humanScore=0;
    comScore=0;
    let computer, human;
    for (let i = 0; i < 5; i++) {
        computer = getComputerChoice();
        
        human = getHumanChoice()-0;
        
        playRound(human, computer);
        console.log(`Your Score:${humanScore}   Computer's Score:${comScore}`);
    }
    if(humanScore>comScore) {
        console.log("Congrats!! You defeated the computer");
    }
    else if(comScore>humanScore) {
        console.log("Alas!! You were defeated by the computer");
    }
    else {
        console.log("The game ended in a draw!");
    }
}
playGame();