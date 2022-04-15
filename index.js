let wins = 0;
let loss = 0;

const computerPlay = () =>{
  let value = Math.floor(Math.random() * 5)
  switch(value){ 
    case 0 :
      return "paper"
    case 1 :
      return "rock"
    case 2 :
      return "scissor"
    case 3 :
      return "lizzard"
    case 4 :
      return "spock"
  }
} 

const playerSelection = () =>{
  let selection = parseInt(prompt("Select your hand:\n 1 - Paper\n 2 - Scissor\n 3 - Rock\n 4 - Lizzard\n 5 - Spock"));

  if (selection >= 0 && selection <= 4){
    switch(selection){ 
      case 1 :
        return "paper"
      case 2 :
        return "rock"
      case 3 :
        return "scissor"
      case 4 :
        return "lizzard"
      case 5 :
        return "spock"
      }
    }
  else {
  return playerSelection();
  }
}

const gamePlay = (computer, player) =>{
  if (
    (player == "rock" && (computer === "scissor" || computer === "lizzard" ))
    ||
    (player == "paper" && (computer === "rock" || computer === "spock" ))
    ||
    (player == "scissor" && (computer === "paper" || computer === "lizzard" ))
    ||
    (player == "lizzard" && (computer === "paper" || computer === "spock" ))
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

  /*
  for(let i = 1; i <= 5; i++){
    alert(`Round ${i}`);
    alert(`Wins: ${wins}\n Loss: ${loss}`);
    gamePlay(computerPlay(), playerSelection());
  }

  wins === loss ? alert("No victory, no defeat")
  : wins > loss ? alert("You are victorius!!!")
  : alert("You has been defeated");

  */


