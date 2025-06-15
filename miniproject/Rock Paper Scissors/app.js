let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScorepara = document.querySelector('#userscore');
const computerScorepara = document.querySelector('#computerscore');

choices.forEach(choice => {
    choice.addEventListener('click',()=>{
        const userChoice = choice.id;
       // console.log(userChoice);
        playGame(userChoice);
    })
});


const playGame = (userChoice) => {
    //console.log("User choice:", userChoice);
    const computerChoice = getComputerChoice();

    if(userChoice === computerChoice) { //Draw
        drawGame();
    }else{
        let userwin =true;
        if(userChoice === 'rock') {
           // scissors, paper
           userwin = computerChoice === 'paper' ? false : true;

        } else if(userChoice === 'paper'){
            // rock, scissors
            userwin = computerChoice === 'scissors' ? false : true;
        }else {
            //rock,paper
            userwin = computerChoice === 'rock' ? false : true;
        }
        showWinnner(userwin, userChoice, computerChoice);
    }
};

const getComputerChoice = () => {
    const opions = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    //console.log("Computer choice:", opions[randomNumber]);
    return opions[randomNumber];

};

const drawGame = () => {
    //console.log("It's a draw!");
    msg.innerText = "It's a draw Play Again!";
    msg.style.backgroundColor = "blue";

};

const showWinnner = (userwin, userChoice, computerChoice) => {
    if(userwin){
    msg.innerText = `You win! Your ${userChoice} beats Computer's ${computerChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScorepara.innerText = userScore;

    } else {
       msg.innerText =`You lose! Your ${userChoice} loses to Computer's ${computerChoice}`;
       msg.style.backgroundColor = "red";
         computerScore++;
         computerScorepara.innerText = computerScore;
    }

};