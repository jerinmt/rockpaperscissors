console.log('hello');
let humanScore=0, comScore=0;
let computer, human;
function getComputerChoice() {
    let x=Math.floor(Math.random()*3);
    console.log('C'+x);
    return x+1;
}
computer=getComputerChoice();
function getHumanChoice() {
    let x = prompt("What's your choice? (1-Rock 2-Paper 3-Scissors)");
    console.log('H'+x);
    return x;
}
human=getHumanChoice()-0;
console.log(human + ' ' + computer);

function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
        case 1: 
            if(computerChoice==1) {
                console.log("Draw, both chose Rock!");
            }
            else if(computerChoice==2) {
                console.log("You lose, Paper defeats Rock!");
                comScore++;
            }
            else {
                console.log("You win, Rock defeats Scissors!");
                humanScore++;
            }
            break;
        case 2: 
            if(computerChoice==2) {
                console.log("Draw, both chose Paper!");
            }
            else if(computerChoice==3) {
                console.log("You lose, Scissors defeat Paper!");
                comScore++;
            }
            else {
                console.log("You win, Paper defeats Rock!");
                humanScore++;
            }
            break;
        case 3: 
            if(computerChoice==3) {
                console.log("Draw, both chose Scissors!");
            }
            else if(computerChoice==1) {
                console.log("You lose, Rock defeats Scissors!");
                comScore++;
            }
            else {
                console.log("You win, Scissors defeat paper!");
                humanScore++;
            }
            break;
    }
}
playRound(human, computer);
console.log(humanScore+' '+comScore);

function playGame() {
    
}