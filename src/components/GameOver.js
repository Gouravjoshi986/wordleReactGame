import React,{useContext } from "react"
import { AppContext } from "../App"

const GameOver = () => {
  const{gameOver,CurrAttempt,correctWord}=useContext(AppContext)
  return (
    <div className='gameOver'>
    <h3>{gameOver.guessedWord ? "YOU WON":"YOU FAILED"}</h3>
    <h1>Correct:{correctWord.toUpperCase()}</h1>
    {gameOver.guessedWord && (<h3>You guessed in {CurrAttempt.attempt} attempts</h3>)}
    </div>
  )
}

export default GameOver