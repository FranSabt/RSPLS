

//VARIABLES
let wins = 0;
let loss = 0;
var hand = "";
let round = 1;
let ties = 0;

let victories = 0;
let defeats = 0;
let Ties = 0

//PLAY FUNCTIONS
const computerPlay = () =>{
  let value = Math.floor(Math.random() * 5)
  switch(value){ 
    case 0 :
      document.getElementById("choisePC").src = "./images/paper.svg";
      return "paper"
    case 1 :
      document.getElementById("choisePC").src = "./images/rock.svg";
      return "rock"
    case 2 :
      document.getElementById("choisePC").src = "./images/scissors.svg";
      return "scissor"
    case 3 :
      document.getElementById("choisePC").src = "./images/lizard.svg"
      return "lizard"
    case 4 :
      document.getElementById("choisePC").src = "./images/spock.svg";
      return "spock"
  }
} 
/*
const playerSelection = selection =>{

  if (selection >= 0 && selection <= 5){
    switch(selection){ 
      case 1 :
        return "paper"
      case 2 :
        return "rock"
      case 3 :
        return "scissor"
      case 4 :
        return "lizard"
      case 5 :
        return "spock"
      }
    }

}
*/

const gamePlay = (computer, player, r) =>{
  console.log(r)
  if (r >= 5){
    roundCount(wins, loss, ties);
  }
  else{
    if (
      (player == "rock" && (computer === "scissor" || computer === "lizard" ))
      ||
      (player == "paper" && (computer === "rock" || computer === "spock" ))
      ||
      (player == "scissor" && (computer === "paper" || computer === "lizard" ))
      ||
      (player == "lizard" && (computer === "paper" || computer === "spock" ))
      ||
      (player == "spock" && (computer === "paper" || computer === "rock" ))
    ){
      document.getElementById("message").innerHTML = 
      (`You Win<br> You choose ${player}, and beats ${computer}`);
      ++wins, ++round;
      updateRound(wins, loss, ties, round);
      return;
    }
    else if(player === computer){
      document.getElementById("message").innerHTML = "Tie!"
      ++ties, ++round;
      updateRound(wins, loss, ties, round);
      return
    }
  
    else{
      document.getElementById("message").innerHTML = 
      `You Loose :c<br> You choose ${player}, has beaten by ${computer}`
      ++loss, ++round;
      updateRound(wins, loss, ties, round);
      return
    }
  }
}

const roundCount = (w, l, t) =>{
  if (w === l && (w !== 0 && l !== 0)){
    alert("No victory, no defeat"); 
    return Ties++, wins = 0, loss = 0, round = 0;
  } 
  else if(w > l){
    alert("You are victorius!!!");
    return victories++, wins = 0, loss = 0, round = 0;
  } 
  else if (l > w){
    alert("You has been defeated");
    return defeats++, wins = 0, loss = 0, round = 0;
  } 
}

const updateRound = (w, l, t, r) => {
  document.getElementById("wins").innerHTML = `Wins ${w}`
  document.getElementById("losses").innerHTML = `Losses ${l}`
  document.getElementById("ties").innerHTML = `Ties: ${t}`
  document.getElementById("round").innerHTML = `Round: ${r}`
}



//DOM FUNCTIONS
const updateGlobal = (victories, defeats, Ties ) => {
  document.getElementById("victories").innerHTML = `Victories: ${victories}`
  document.getElementById("Defeats").innerHTML = `Defeats: ${defeats}`
  document.getElementById("Ties").innerHTML = `Ties: ${Ties}`
}

const playerChoice = () =>{
  document.getElementsByClassName("img").onclick =  a
}

const playerHand = (selection) => {
  updateGlobal(victories, defeats, Ties);
  let image = (`./images/${selection}.svg`);
  document.getElementById("choise").src = image;
  gamePlay(computerPlay(), selection, round);
}

  updateRound(wins, loss, ties, round);

  updateGlobal(victories, defeats, Ties);