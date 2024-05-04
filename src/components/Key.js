import React,{useContext}from 'react'
import { AppContext } from '../App';

function Key({keyVal,bigkey,disabled}) {
    const {onSelect,onDelete,onEnter}=useContext(AppContext);
    const selectLetter=()=>{
        if(keyVal === "ENTER"){
          onEnter(); 
        }else if(keyVal==="DELETE"){
          onDelete();
          }else{
          onSelect(keyVal);
        }
    };
  return (
    <div className="key" id={bigkey?"big":disabled && "disabled"} onClick={selectLetter}>{keyVal}</div>
  )
}

export default Key