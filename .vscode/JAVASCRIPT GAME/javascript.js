let userscore =0;
let computerscore = 0;

const Choices = document.querySelectorAll(".Choice");
const msg = document.querySelector("#msg");
const userScoreParagraph = document.querySelector("#user-score");
const computerScoreParagraph = document.querySelector("#computer-score");

const genCompChoice =() => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

const drawGame = () => {
    msg.innerText = "It's a tie!, Play Again";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin) {
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userscore++;
        userScoreParagraph.innerText = userscore;
    }
    else {
        msg.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerscore++;
        computerScoreParagraph.innerText = computerscore;
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const computerChoice = genCompChoice();
    console.log("computer choice = ", computerChoice);

    if (userChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else {
        let userWin = true;
        if((userChoice === "Rock" && computerChoice === "Paper") ||
           (userChoice === "Paper" && computerChoice === "Scissors") ||
           (userChoice === "Scissors" && computerChoice === "Rock")) {
            userWin = false;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

Choices.forEach((Choice) => {
    console.log(Choice);
    Choice.addEventListener("click", () => {
        const userChoice = Choice.getAttribute("id");
        console.log("Choice was clicked:", userChoice);
        playGame(userChoice);

    });
});