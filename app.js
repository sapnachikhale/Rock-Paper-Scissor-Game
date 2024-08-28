let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice');
const msg=document.querySelector('#msg');
const userScorePara=document.querySelector('#user-score');
const compScorepara=document.querySelector('#comp-score');

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute('id');
        playGame(userChoice);
    });
});

const genCompChoice=()=>{
 //rock.paper,scissors
 let options=['rock','paper','scissors'];
 let randIdx=Math.floor(Math.random()*3);
 return options[randIdx];
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
       userScore++;
       userScorePara.innerText=userScore;
        msg.innerText=`You Win!.. Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green"
    }else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText=`You Lose!..${compChoice} beats your ${userChoice}`;
         msg.style.backgroundColor="red"
    }
}
const playGame=(userChoice)=>{
    
const compChoice=genCompChoice();

if(userChoice===compChoice){
    drawGame();
}else{
    let userwin=true;
    if(userChoice==='rock'){
        userwin=compChoice==='paper'? false :true;
    }else if(userChoice==='paper'){
        userwin=compChoice==='scissors'?false:true;
    }else{
       userwin= compChoice==='rock' ? false :true;
    }
    showWinner(userwin,userChoice,compChoice);
}
}
const drawGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorepara.innerText = compScore;
    msg.innerText = 'Game was a draw! Play again';
    msg.style.backgroundColor = "black";
}

