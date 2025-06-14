let boxes =document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let draw =document.querySelector(".draw");
let draws =document.querySelector("#dr");


let count = 0; //To count the number of moves made by players
// If the count reaches 9, it means the game is a draw
let playerO = true; //player O starts first

const winningCombinations = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {

    box.addEventListener("click",() => {
       // console.log("Clicked");
        if(playerO){ //Player O's turn
            box.innerText = "O";
            box.classList.add("o");
            playerO = false;
        }else{ //Player X's turn
            box.innerText = "X";
            box.classList.add("x");
            playerO = true;
        }
        box.disabled = true;
        count++; //Disable the box after click
        checkWinner();
    })
});

const showWinner=(winner) =>{
   msg.innerText = `Player ${winner} wins!`;
   msgcontainer.classList.remove("hide");
};

const showDraw = () => {
    draws.innerText = "It's a draw !!!";
    draw.classList.remove("hide");
    draws.classList.add("show");
    draw.classList.add("show");
};

const enableAllBoxes = () => {

    for (let box of boxes) {
        box.disabled = false; //Enable all boxes
        box.innerText = ""; //Clear the text in all boxes
        box.classList.remove("x", "o"); //Remove the classes from all boxes
    }
};


const disableAllBoxes = () => {

    for (let box of boxes) {
        box.disabled = true; //Disable all boxes
    }
};

const checkWinner = () => {
    for(let pattern of winningCombinations){
        //console.log(pattern);
        let box1 = boxes[pattern[0]].innerText;
        let box2 = boxes[pattern[1]].innerText;
        let box3 = boxes[pattern[2]].innerText;
        if(box1 === "" || box2 === "" || box3 === "") continue; //If any box is empty, skip to next pattern
        if(box1 === box2 && box2 === box3){ //If all three boxes have the same value
            // alert(`Player ${box1} wins!`);
           // resetGame();
           showWinner(box1);
           /* boxes.forEach((box) => {  //we used a function for more readability
                box.disabled = true; //Disable all boxes after a win
            });*/
            disableAllBoxes();
            return;
        }
    }
    if(count === 9){ //If all boxes are filled and no winner
        // alert("It's a draw!");
        showDraw();
        disableAllBoxes(); //Disable all boxes after a draw
        return;
    }
};

/*const resetGame = () => {
    playerO = true; //Reset player O's turn
    enableAllBoxes();
    msgcontainer.classList.add("hide"); 
};
*/
// Example reset function
function resetGame() {
    for (let box of boxes) {
        box.innerText = "";
        box.classList.remove("x", "o");
        box.disabled = false; // if you disable boxes on win
    }
    playerO = true; // or whatever your initial state is
    
    enableAllBoxes(); // Enable all boxes
    msgcontainer.classList.add("hide"); // Hide the message container
    draw.classList.add("hide"); // Hide the draw message
    draws.classList.remove("show");
    draw.classList.remove("show");
    count = 0; // Reset the count of moves
};

newbtn.addEventListener("click", () => {
    resetGame();
});
reset.addEventListener("click", () => {
    resetGame();
});