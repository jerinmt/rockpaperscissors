let humanScore, comScore;
function getComputerChoice() {
    let x=Math.floor(Math.random()*3);
    return x+1;
}
function playRound(humanChoice, computerChoice) {
    if(humanScore==5||comScore==5) {
        return;
    }
    let humanSign = document.querySelector(".player");
    let comSign = document.querySelector(".computer");
    let roundUpdate = document.querySelector(".roundResult");
    switch(humanChoice) {
        case 1:
            humanSign.innerHTML = "&#9994";
            if(computerChoice==1) {
                comSign.innerHTML = "&#9994";
                roundUpdate.textContent = "Both chose Rock!";
            }
            else if(computerChoice==2) {
                comSign.innerHTML = "&#9995";
                roundUpdate.textContent = "You chose Rock, computer chose Paper. \n You lost this round!";
                comScore++;
            }
            else {
                comSign.innerHTML = "&#9996";
                roundUpdate.textContent = "You chose Rock, computer chose Scissors. \n You won this round!";
                humanScore++;
            }
            break;
        case 2: 
            humanSign.innerHTML = "&#9995";
            if(computerChoice==2) {
                comSign.innerHTML = "&#9995";
                roundUpdate.textContent = "Both chose Paper!";
            }
            else if(computerChoice==3) {
                comSign.innerHTML = "&#9996";
                roundUpdate.textContent = "You chose Paper, computer chose Scissors. \n You lost this round!";
                comScore++;
            }
            else {
                comSign.innerHTML = "&#9994";
                roundUpdate.textContent = "You chose Paper, computer chose Rock. \n You won this round!";
                humanScore++;
            }
            break;
        case 3: 
            humanSign.innerHTML = "&#9996";
            if(computerChoice==3) {
                comSign.innerHTML = "&#9996";
                roundUpdate.textContent = "Both chose Scissors!";
            }
            else if(computerChoice==1) {
                comSign.innerHTML = "&#9994";
                roundUpdate.textContent = "You chose Scissors, computer chose Rock. \n You lost this round!";
                comScore++;
            }
            else {
                comSign.innerHTML = "&#9995";
                roundUpdate.textContent = "You chose Scissors, computer chose Paper. \n You won this round!";
                humanScore++;
            }
            break;
    }
    if(humanScore==5) {
            document.querySelector(".result").textContent = "Congrats!! You defeated the computer";
    }
    if(comScore==5) {
            document.querySelector(".result").textContent = "Alas!! You were defeated by the computer";
    }
}

function playGame() {
    humanScore=0;
    comScore=0;
    let computer, human;
    let score = document.querySelector(".score");
    score.textContent = `Your score:${humanScore}   Computer score:${comScore}`;
    let buttonPressed = document.querySelector(".buttons");
    buttonPressed.addEventListener("click", function (Event) {
        if(Event.target.textContent=="Rock") {
            human = 1;
        }
        if(Event.target.textContent=="Paper") {
            human = 2;
        }
        if(Event.target.textContent=="Scissors") {
            human = 3;
        }
        computer = getComputerChoice();
        playRound(human, computer);
        score.textContent = `Your score:${humanScore}   Computer score:${comScore}`;
    });
}
playGame();