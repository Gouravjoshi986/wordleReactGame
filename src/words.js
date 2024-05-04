import wordbank from "./valid-wordle-words.txt"
export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
];
 
export const generateWordSet = async ()=>{
  let wordset;
  let todaysWord;
  await fetch(wordbank).then((response)=>response.text()).then((result)=>{
   const wordArr = result.split("\n");
   todaysWord =wordArr[Math.floor(Math.random()*wordArr.length)]
   wordset = new Set(wordArr);
  });
  return {wordset,todaysWord};
};