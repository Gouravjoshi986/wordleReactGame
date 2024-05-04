import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import {createContext, useState,useEffect} from "react";
import { boardDefault,generateWordSet} from "./words"
import GameOver from './components/GameOver';

export const AppContext=createContext();

function App() {
  const [board,setBoard]= useState(boardDefault);
  const [CurrAttempt,setCurrAttempt]= useState({attempt:0,letterPos:0});
  const [wordset,setwordset]= useState(new Set());
  const [disabledletter,setdisabledletter]= useState([]);
  const [correctWord,setCorrectWord]= useState("");
  const [gameOver,setGameOver]=useState({
    gameOver:false,
    guessedWord:false,
  })
  
  useEffect(() => {
    generateWordSet().then((words)=>{
      setwordset(words.wordset);
      setCorrectWord(words.todaysWord);
    });
  }, [])

  const onSelect=(keyVal)=>{
    if(CurrAttempt.letterPos>4) return;
    const newBoard=[...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos]=keyVal; 
    setBoard(newBoard);
    setCurrAttempt({...CurrAttempt, letterPos : CurrAttempt.letterPos + 1});
  };
  const onDelete=()=>{
    if(CurrAttempt.letterPos===0)return;   
    const newBoard=[...board];
    newBoard[CurrAttempt.attempt][CurrAttempt.letterPos-1]="";   
    setBoard(newBoard);
    setCurrAttempt({...CurrAttempt, letterPos : CurrAttempt.letterPos - 1});
  };
  const onEnter=()=>{
    if(CurrAttempt.letterPos !==5)return;

    let currword="";
    for(let i=0;i<5;i++){
      currword+=board[CurrAttempt.attempt][i];
    }
    if(wordset.has(currword.toLowerCase())){
      setCurrAttempt({attempt:CurrAttempt.attempt+1,letterPos:0});
    }else{
       alert("WORD NOT FOUND IN WORD BANK");
    }
    if(currword===correctWord){
      setGameOver({gameOver:true,guessedWord:true})
      return;
    }
    if(CurrAttempt.attempt===5){
      setGameOver({gameOver:true,guessedWord:false})
    }
  };
  return (
    <div className="App">
     <nav><h1>Wordle</h1></nav>
     <AppContext.Provider value={{board,setBoard,CurrAttempt,setCurrAttempt,onSelect,onDelete,onEnter,correctWord,disabledletter,setdisabledletter,setGameOver,gameOver}}>
     <div className='game'>
     <Board/>
     {gameOver.gameOver?<GameOver/>:<Keyboard/>}
     </div>
     </AppContext.Provider>
    </div>
  );
}

export default App;
