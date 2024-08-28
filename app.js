let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    let options=["Rock","Paper","Scissor"]
    // rock,paper,scissors
    const randIdx=Math.floor(Math.random()*3);//math.random gerates value from 0 to 1 and math.floor removes decimal value.
    return options[randIdx];
}

drawGame=()=>{
    // console.log("Game was Draw.");
    msg.innerText="Game is draw. Please Play Again!"
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        // console.log("You win.");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your Choice: ${userChoice} beats the Computer Choice: ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.color="white"
    }else{
        // console.log("You lose.");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! Computer Choice: ${compChoice} beats your Choice: ${userChoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="black"
    }
};
const playGame=(userChoice)=>{
    console.log("user choice:",userChoice);
    // Generate computer choice.
    const compChoice=genCompChoice();
    console.log("Computer choice:",compChoice);

    if (userChoice===compChoice){
        //draw game
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            //Scissors or Paper
            userWin=compChoice==="Paper"?false:true
        }else if(userChoice==="Paper"){
            // Scissors or Rock
            userWin=compChoice==="Scissor"?false:true
        }else if(userChoice==="Scissor"){
            //Rock or Paper
            userWin=compChoice==="Rock"?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
};


choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{  
        const userChoice=choice.getAttribute("id"); 
    // console.log("choice was clicked:",userChoice)
    playGame(userChoice);
    });
});


// Reset Game Functionality

const resetButton = document.querySelector("#reset-button");

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    msg.style.color = "white";
};

resetButton.addEventListener("click", resetGame);
