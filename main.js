let count=0;
let countcom=0;
let round=0;
function opt1(choice)
{

    if(round>=10)
    {
        alert("Game over Restart to play again")
    }
    round++;


    let head=document.getElementById("userchoice")  //user side
    head.textContent="You selected: " + choice;

const com=document.getElementById("comchoice");  //Computer side
let comchoice=Math.floor(Math.random()*3)
let choices=["Rock","Paper","Scissors"];
let computerchoice= choices[comchoice] //stored string
com.textContent="Computer Selected:" + computerchoice;

let final = document.getElementById("result");
if (choice === computerchoice)
     {
   final.textContent = "Result: Draw🤝 ";
}
else if (
    (choice === "Rock" && computerchoice === "Scissors") ||
    (choice === "Paper" && computerchoice === "Rock") ||
    (choice === "Scissors" && computerchoice === "Paper")
) {
     final.textContent = "Result: You Win🥳 ";
     count++;
}
else {
   final.textContent = "Result: You Lose ☹️";
   countcom++;   
}

let finalscore=document.getElementById("userscore");  //for user score
finalscore.textContent="your score:"+ count ;
console.log("score:"+count);


let finalscorecom=document.getElementById("comscore");  //For computer Score
finalscorecom.textContent="computer score:"+ countcom ;
console.log("scorecom:"+countcom);

let resultofboth=document.getElementById("Round");  //For Round
resultofboth.textContent="Round: " + round + "/10";
console.log("scorecom:"+countcom);


if(round === 10){

        if(userscore > comscore){
            alert("🎉 You won the game!");
        }

        else {
            alert("💻 Computer won the game!");
        }

    }
}
function restartGame(){
    location.reload();
}

