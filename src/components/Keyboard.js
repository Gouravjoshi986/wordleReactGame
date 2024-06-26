import React,{useContext,useEffect,useCallback} from 'react'
import { AppContext } from '../App';
import Key from './Key';

const Keyboard = () => {
  const {onSelect,onEnter,onDelete,disabledletter}=useContext(AppContext);

  const keys1=["Q","W","E","R","T","Y","U","I","O","P"];
  const keys2=["A","S","D","F","G","H","J","K","L"];
  const keys3=["Z","X","C","V","B","N","M"];
 
  const handleKeyboard = useCallback((event) => {
      if(event.key==="Enter"){
        onEnter();
      }else if(event.key==="Backspace"){
        onDelete();
      }else{
        keys1.forEach((key)=>{
          if(event.key.toLowerCase()===key.toLowerCase()){
            onSelect(key);
          }});
        keys2.forEach((key)=>{
          if(event.key.toLowerCase()===key.toLowerCase()){
            onSelect(key);
          }});
        keys3.forEach((key)=>{
          if(event.key.toLowerCase()===key.toLowerCase()){
            onSelect(key);
          }});
      }
    });
  
  useEffect(()=>{
      document.addEventListener("keydown",handleKeyboard);

      return ()=>{
        document.removeEventListener("keydown",handleKeyboard);
      };
  } ,[handleKeyboard]); 
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">{keys1.map((key) =>{
        return <Key keyVal={key} disabled={disabledletter.includes(key)}/>
      })}</div>
      <div className="line2">{keys2.map((key) =>{
        return <Key keyVal={key} disabled={disabledletter.includes(key)}/>
      })}</div>
      <div className="line3">
      <Key keyVal={"ENTER"} bigkey/>
      {keys3.map((key) =>{
        return <Key keyVal={key} disabled={disabledletter.includes(key)}/>
      })}
      <Key keyVal={"DELETE"} bigkey/>
      </div>
    </div>
  )
}

export default Keyboard