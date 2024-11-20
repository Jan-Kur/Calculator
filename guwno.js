function getComputerChoice() {
    let randomNumber = Math.random();
    
    if (randomNumber <= 0.33) {
        return "rock"
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    return prompt("Choose one: rock, paper or scissors")
}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    let result = document.querySelector(".result")
    if (humanChoice === "rock") {
        if (computerChoice === "rock") {
            result.innerText = "It's a tie. Your oponent also chose rock."
        } else if (computerChoice === "paper") {
            ++computerScore
            result.innerText = "You loose. Your oponent chose paper." 
        } else {
            ++humanScore
            result.innerText = "You win. Your oponent chose scissors."
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            ++humanScore
            result.innerText = "You win. Your oponent chose rock."
        } else if (computerChoice === "paper") {
            result.innerText = "It's a tie. Your oponent also chose paper." 
        } else {
            ++computerScore
            result.innerText = "You loose. Your oponent chose scissors."
        }
    } else if (humanChoice === "scissors"){
        if (computerChoice === "rock") {
            ++computerScore
            result.innerText = "You loose. Your oponent chose rock."
        } else if (computerChoice === "paper") {
            ++humanScore
            result.innerText = "You win. Your oponent chose paper." 
        } else {
            result.innerText = "It's a tie. Your oponent also chose scissors."
        }
    } else {
        result.innerText = `There is no such option as ${humanChoice}.`
    }

    document.querySelector(".yourScore").innerText = humanScore;
    document.querySelector(".oponentScore").innerText = computerScore;
}

async function playGame() {
    for (let round = 0; round < 5; round++) {
        let humanSelection = getHumanChoice();
        if (!humanSelection) break;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    
    let result = document.querySelector(".result") 
    if (computerScore === humanScore) {
        result.innerText = "The game ended as a tie. You can try once again :)"
    } else if (computerScore > humanScore) {
        result.innerText = "Unfortunately you lost the game. Maybe you are not that good at rock, paper, scissors after all... You can try again tho :)"
    } else {
        result.innerText = "You won this game! You beat the odds."
    }
}

playGame()

