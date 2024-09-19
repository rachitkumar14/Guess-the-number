 import { useState } from "react";

function Game()
{
    let [number,setNumber]=useState("")
    let [rand,setRand]=useState("")
    const [count,setCount]=useState(0)
    const [highScore,setHighScore]=useState(null);
    function randomNumber()
    {
     let    random=Math.floor(Math.random()*100)+1;
        console.log(random);
        setRand(random);
        alert('Hogya hai tumhara no. generate ')
        
    
    }
    function submit(e)
    {
    e.preventDefault();
    setCount(count+1);
    if(count>=5){
        
        alert('Sorry, You lose the Game')
        
    }
  
    else if(rand==""){
        alert("Please Generate the Random no. first")
    }
    else if(number=="")
    {
        alert('please fill the number');
        
    }
      else if(number>rand)
       {
        alert('Please choose low number')
       }
      else if(number<rand)
       {
        alert('please choose bada no.')
       }
       else
       {
        alert('You won')
        setHighScore(count);
        localStorage.setItem('highScore',count+1);
        let highestScore=localStorage.getItem('highScore');
        if(highestScore>count)
        {
            alert(`Your highest Score is :${count+1} `)
            localStorage.setItem('highScore',count+1)
        }
       }
    }
    return(
        <div>
             <h2>You have to guess the no. in 5 attempts to win the game </h2>
              <button onClick={()=>randomNumber()}>Generate the Random No.</button>
               
              <br></br>
              <input type="text" onChange={(e)=>setNumber(e.target.value)}></input><br></br>
              <button onClick={submit} >Guess the Number</button>
              
               { (count>=5)?<h1>Sorry,You lose the Game</h1>:<h1>{count} times Guess complete</h1>}
              

        </div>
    )
}
export default Game;