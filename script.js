console.log("Welcome to Rock, Paper, Scissors!");


//function to pick a random integer for computer choice

let randomInteger = Math.floor(Math.random()* 3);

//function to match rock, paper or scissors to a number generated by the above function.

function ComputerChoice(randomInteger){
    if (randomInteger == 0) {
        computerChoice = "Rock"

    } else if (randomInteger == 1) {
        computerChoice = "Paper"


    } else if (randomInteger==2) {
        computerChoice = "Scissors"

    }
    return computerChoice 
}

console.log (ComputerChoice(randomInteger))




