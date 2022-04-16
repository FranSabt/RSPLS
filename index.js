//VARIABLES
let wins = 0;
let loss = 0;
var hand = "";

let victories = 0;
let defeats = 0;
let Ties = 0

//PLAY FUNCTIONS
const computerPlay = () =>{
  let value = Math.floor(Math.random() * 5)
  console.log(value)
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

const gamePlay = (computer, player) =>{
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
    prompt(`You Win\n You choose ${player}, and beats ${computer}`)
    return ++wins
  }
  else if(player === computer){alert("Tie!")}

  else{
    prompt(`You Loose :c\n You choose ${player}, has beaten by ${computer}`)
    return ++loss
  }
}




//DOM FUNCTIONS
const updateGlobal = () => {
  document.getElementById("victories").innerHTML = `Victories: ${victories}`
  document.getElementById("Defeats").innerHTML = `Defeats: ${defeats}`
  document.getElementById("Ties").innerHTML = `Ties: ${defeats}`
}

const playerChoice = () =>{
  document.getElementsByClassName("img").onclick =  a
}

const playerHand = (selection) => {
  console.log(selection)
  let image = (`./images/${selection}.svg`);
  document.getElementById("choise").src = image;
  gamePlay(computerPlay(), selection)
}



  if (wins === loss && (wins !== 0 && loss !== 0)){
    alert("No victory, no defeat"); 
    Ties++;
    wins = 0;
    loss = 0;
  } 
  else if(wins > loss){
    alert("You are victorius!!!"); 
    victories++;
    wins = 0;
    loss = 0;
  } 
  else if (loss > wins){
    alert("You has been defeated"); 
    defeats++;
    wins = 0;
    loss = 0;
  } 

  updateGlobal();