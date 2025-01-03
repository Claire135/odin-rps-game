function playGame() {

    //variables to store score
    let humanScore = 0;
    let computerScore =  0;
    let roundNo = 1

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

            const round = document.querySelector("#round");
            round.textContent = `Clash No. ${roundNo}`;



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
            computerChoiceText.textContent = "Crom Cruach: " + computerChoice;            
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
            
            const leftOgham = document.querySelector("#leftOgham");
            const heroScore = document.createElement("div");
            heroScore.classList.add("heroScore");
            heroScore.textContent = "Hero: " + humanScore;
            leftOgham.appendChild(heroScore);
        
            const rightOgham = document.querySelector("#rightOgham")
            const computerScoreText = document.createElement("div");
            computerScoreText.classList.add("computerScoreText");
            computerScoreText.textContent = "Crom Cruach: " + computerScore;
            rightOgham.appendChild(computerScoreText);
            console.log("Hero: " + humanScore);
            console.log("Crom Cruach: " + computerScore); 
        }

        // Set up event listeners for buttons
        const buttons = document.querySelectorAll("button");

        buttons.forEach((button) => {
            button.addEventListener("click", (event) => {
                document.querySelector(".message").textContent = "";
                document.querySelector("#declareWinner").textContent = "";
                document.querySelector("#battleChoice").textContent = "";
                document.querySelector("#leftOgham").textContent = "";
                document.querySelector("#rightOgham").textContent = "";
                document.querySelector("#round").textContent = "";
                
                const humanChoice = getHumanChoice(event.target); // Pass the clicked button to getHumanChoice
                playRound(humanChoice);
                
                roundNo++;
                
                if (roundNo === 6) {
                    endGame();
                }

            });
        });
    
        function endGame(){
            const endGameWinner = document.querySelector("#endGameWinner")
            buttons.forEach((button) => (button.disabled = true));
            document.querySelector("#declareWinner").textContent = "";
            document.querySelector("#battleChoice").textContent = "";
            document.querySelector("#round").textContent = "";
            
            if (humanScore > computerScore) {
                const humanWinsText = document.createElement("div");
                endGameWinner.textContent = "You're an absolute winner! Take that Crom Cruach!";
                
                const crowWinning = document.createElement('img');
                crowWinning.src = "./images/crow_3.png"
                crowWinning.alt = 'Crow standing victoriously';
                crowWinning.style.height = "150px";
                crowWinning.style.width = "auto";
                endGameWinner.appendChild(crowWinning);

                console.log("You're an absolute winner! Take that Crom Cruach!")
            
            } else if (humanScore < computerScore) {
                const computerWinsText = document.createElement("div");
                endGameWinner.textContent = "Crom Cruach has triumphed! Boo you!";
                
                const crow = document.createElement('img');
                crow.src = "./images/crow_2.png" 
                crow.alt = 'Crow on a skull';
                crow.style.height = "180px";
                crow.style.width = "auto";
                endGameWinner.appendChild(crow);
        
                console.log("Computer wins! Boo you!")
            
            } else {
                const tieText = document.createElement("div");
                endGameWinner.textContent = "It's a tie - you both walk away to fight another day.";
                console.log("It's a tie!")

                const crowFlying = document.createElement('img');
                crowFlying.src = "./images/crow_1.png"
                crowFlying.alt = 'Crow flying away';
                crowFlying.style.height = "150px";
                crowFlying.style.width = "auto";
                endGameWinner.appendChild(crowFlying);
            }

        }


}

const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click", () => {
    
    const message = document.createElement("div");
    message.classList.add("message");
    message.textContent = "Choose your weapon!";
    startBtn.appendChild(message);
    
    startBtn.replaceWith(message);
    
        startBtn.remove(); // Removes the start button
        playGame();
});
