let userScore=0;
let compScore=0;
const userscorePara=document.querySelector("#user-score");

const compscorePara=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const gencompchoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=() =>{
    console.log("game was draw");
    msg.innerText="Game was Draw!!.Play Again";
    msg.style.backgroundColor="#1E342D";

};
const showWinner=(userWin,choiceId,compChoice) =>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You Win!!,your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorePara.innerText=compScore;
        console.log("you lost");
        msg.innerText=`You Lose!!, ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(choiceId) =>{
    console.log("user choice",choiceId);
    //generate computer choice
    const compChoice=gencompchoice();
    console.log("comp choice", compChoice);

    if(choiceId===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(choiceId===rock){
            userWin=compChoice==="paper"?false:true;

        }
        else if(choiceId==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,choiceId,compChoice);
    }

    }


const choices=document.querySelectorAll(".choice");
choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const choiceId=choice.getAttribute("id");
        console.log("choice was clicked",choiceId);
        playGame(choiceId);

    });
});