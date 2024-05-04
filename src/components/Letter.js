import React,{useContext, useEffect} from 'react'
import { AppContext } from '../App';
const Letter = ({letterPos,attemptVal}) => {
    const {board,correctWord,CurrAttempt,setdisabledletter}=useContext(AppContext);
    const letter = board[attemptVal][letterPos];
    const correct= correctWord.toUpperCase()[letterPos]===letter;
    const almost= !correct && letter!=="" && correctWord.includes(letter)
    const letterState= 
    CurrAttempt.attempt > attemptVal && (correct?"correct":almost?"almost":"error");

    useEffect(()=>{
      if(letter!=="" && !correct && !almost){
       setdisabledletter((prev)=>[...prev,letter]);
      }
    },[CurrAttempt.attempt]);
  return (
    <div className='letter' id={letterState}>{letter}</div>
  )
}

export default Letter