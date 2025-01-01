
console.log("Welcome to rock paper scissors")

function playGame() {

    //variables to store score
    let humanScore = 0;
    let computerScore =  0;
    const rounds = 5

    //for (let roundNo = 1; roundNo <= rounds; roundNo++ ) {   
      //  console.log(`Round ${roundNo}!`);

        //generate a random integer and assign it to a string
        function getComputerChoice(){
            const randomInteger = Math.floor(Math.random()* 3);

            if (randomInteger == 0) {
                compChoice = "rock";

            } else if (randomInteger == 1) {
                compChoice = "paper";


            } else if (randomInteger==2) {
                compChoice = "scissors";

            }
            return compChoice;
        }
        const rockBtn = document.querySelector("#rockBtn");
        const paperBtn = document.querySelector("#paperBtn");
        const scissorsBtn = document.querySelector("#scissorsBtn");

        function getHumanChoice(button) {
            return button.id.replace("Btn", "").toLowerCase();
        }

        function playRound(humanChoice){
            const computerChoice = getComputerChoice();

            //function to compare computer and human answer and assign a winner
            function getWinner(humanChoice, computerChoice) {
                if (humanChoice === computerChoice) {
                    return "tie"

                } else if (humanChoice === "rock" && computerChoice === "scissors") {
                    return "human"


                } else if (humanChoice === "scissors" && computerChoice === "paper") {
                    return "human"

                } else if (humanChoice === "paper" && computerChoice === "rock") {
                    return "human"

                } else {
                    return "computer"
                }
            }     
        
            const gameRound = getWinner(humanChoice, computerChoice);

            //increment computerScore and humanScore by 1 
            if (gameRound === "human"){
                humanScore ++;
            }

            else if (gameRound === "computer"){
                computerScore++;
            }

            const battleChoice = document.querySelector("#battleChoice");
            
            const humanChoiceText = document.createElement("div");
            humanChoiceText.classList.add("humanChoiceText");
            humanChoiceText.textContent = "Your choice: " + humanChoice;
            battleChoice.appendChild(humanChoiceText);
            
            const computerChoiceText = document.createElement("div");
            computerChoiceText.classList.add("computerChoiceText")
            computerChoiceText.textContent = "Computer's choice: " + computerChoice;            
            battleChoice.appendChild(computerChoiceText);

            console.log ("Your choice:" + humanChoice);
            console.log ("Computer's choice: " + computerChoice);

            //declare result of the match
            const declareWinner = document.querySelector("#declareWinner")

            if (gameRound === "human") {
                const youWinText = document.createElement("div");
                youWinText.classList.add("youWinText");
                youWinText.textContent = "A victory! " + humanChoice + " beats " + computerChoice;
                declareWinner.appendChild(youWinText);

                console.log("You win! " + humanChoice + " beats " + computerChoice)

            } else if (gameRound === "computer"){ 
                const youLoseText = document.createElement("div");
                youLoseText.classList.add("youLoseText");
                youLoseText.textContent = "You have been wounded! " + computerChoice + " beats " + humanChoice
                declareWinner.appendChild(youLoseText);

                console.log("You lose :( " + computerChoice + " beats " + humanChoice)
            
            } else if (gameRound === "tie") {
                const tieText = document.createElement("div");
                tieText.classList.add("tieText");
                tieText.textContent = "You are evenly matched - you must fight harder!"
                declareWinner.appendChild(tieText);
                console.log("You are evenly matched - you must fight harder!")
            
            }

            console.log("Your score: " + humanScore);
            console.log("Computer's score: " + computerScore); 
        
            return true;
        }

        // Set up event listeners for buttons
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                const humanChoice = getHumanChoice(event.target); // Pass the clicked button to getHumanChoice
                playRound(humanChoice);
            });
        });
}
    
/*
    if (humanScore > computerScore) {
        console.log("You're an absolute winner! Take that computer!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins! Boo you!")
    } else { 
        console.log("It's a tie!")
    }

}
*/

playGame()
