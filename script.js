let q1 = confirm("Would You Like to Play a Game?");
if (q1) {
  let p1 = prompt("Choose rock,paper or sis");

  if (p1) {
    let player = p1;

    if (player === "rock" || player === "paper" || player === "sis") {
      let computerC = Math.floor(Math.random() * 3 + 1);
       let computer=
       computerC===1 ? "rock"
       : computerC===2 ? "paper" 
       : "sis"
      
       let result = 
       computer === player ? "Tie!" 
       : computer==="rock" && player==="sis" ? "Computer Wins!" 
       :computer==="sis" && player==="rock" ? "player WIns!"
       : computer==="paper" && player==="rock" ? "Computer Wins!" 
       :computer==="rock" && player==="paper" ? "player WIns!"
       : computer==="sis" && player==="paper" ? "Computer Wins!" 
       :computer==="paper" && player==="sis" ? "player WIns!":nothing;

    
       alert(`Player: ${player} \n Computer: ${computer} \n Result: ${result}`)
       let again = confirm("Play Again?") 
        if(again){
            location.reload() 
        }else("ok. Have a Great Day!")
    } else {
      alert("you didnt chose a legit answer!");
    }
  } else {
    alert("Maybe You Changed Your Mind haha. Cya ");
  }
} else {
  alert("Ok . Maybe Next Time");
}
