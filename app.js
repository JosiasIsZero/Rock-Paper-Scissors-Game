let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('R');
const paper_div = document.getElementById('P');
const scissors_div = document.getElementById('S');

function getComputerChoice() {
    const choices = ["R","P","S"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('green-glow');
    document.getElementById(computerChoice).classList.add('red-glow');
    if (userChoice == "R") {
        userChoice = "Rock";
    } else if (userChoice == "P") {
        userChoice = "Paper";
    } else {
        userChoice = "Scissors";
    }
    if (computerChoice == "R") {
        computerChoice = "Rock";
    } else if (computerChoice == "P") {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    result_p.innerHTML = userChoice + " Beats " + computerChoice + ". You Win!";
    if (userChoice == "Rock") {
        userChoice = "R";
    } else if (userChoice == "Paper") {
        userChoice = "P";
    } else {
        userChoice = "S";
    }
    if (computerChoice == "Rock") {
        computerChoice = "R";
    } else if (computerChoice == "Paper") {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 600);
    setTimeout(function() {
        document.getElementById(computerChoice).classList.remove('red-glow');
    }, 600);
}



function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    document.getElementById(userChoice).classList.add('red-glow');
    document.getElementById(computerChoice).classList.add('green-glow');
    if (userChoice == "R") {
        userChoice = "Rock";
    } else if (userChoice == "P") {
        userChoice = "Paper";
    } else {
        userChoice = "Scissors";
    }
    if (computerChoice == "R") {
        computerChoice = "Rock";
    } else if (computerChoice == "P") {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    result_p.innerHTML = userChoice + " Loses To " + computerChoice + ". You Lose!";
    if (userChoice == "Rock") {
        userChoice = "R";
    } else if (userChoice == "Paper") {
        userChoice = "P";
    } else {
        userChoice = "S";
    }
    if (computerChoice == "Rock") {
        computerChoice = "R";
    } else if (computerChoice == "Paper") {
        computerChoice = "P";
    } else {
        computerChoice = "S";
    }
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
    }, 700);
    setTimeout(function() {
        document.getElementById(computerChoice).classList.remove('green-glow');
    }, 700);
}

function draw(userChoice, computerChoice) {
    userScore++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = "Draw!";
    document.getElementById(userChoice).classList.add('orange-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('orange-glow');
    }, 700);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "RS":
        case "PR":
        case "SP":
            win(userChoice, computerChoice);
            break;
        case "RP":
        case "PS":
        case "SR":
            lose(userChoice, computerChoice);
            break;
        case "RR":
        case "PP":
        case "SS":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("R");
    })
    paper_div.addEventListener('click', function() {
        game("P");
    })
    scissors_div.addEventListener('click', function() {
        game("S");
    })
}

main();