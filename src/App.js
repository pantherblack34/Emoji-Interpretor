import React, {useState} from 'react';
import "./styles.css";

const emojiContainer = {
  "😀" : "Smiley Teeth",
  "😘" : "Flying Kiss Heart",
  "🥳" : "Partying",
  "😔" : "Sad",
  "😡" : "Angry",
  "😱" : "Shocked",
  "😴" : "Sleeping",
  "👽" : "Alien",
  "☠️" : "Danger",
  "🤐" : "Do not tell",
  "🤒" : "Fever",
  "👻" : "Ghost",
  "😭" : "Crying",
  "🤥" : "Lying"
}

const emoji = Object.keys(emojiContainer);

export default function App() {
let bgColor = "black";
let fColor = "yellow";
let fSize = "x-large";
const [userInput, setUserInput] = useState("");
 

function emojiHandler(event){ 
  
  const userEmoji = event.target.value;

   let emojiMeaning = emojiContainer[userEmoji]; 
    if(emojiMeaning === undefined){
      emojiMeaning = "Sorry!!! We don't have this in our database.";      
    }     
    setUserInput(emojiMeaning);
}

function emojiTeller(emoji){

  let emojiMeaning = emojiContainer[emoji];  
  setUserInput(emojiMeaning);
}



  return (
    <div className="App">
      <h1 style={{backgroundColor: bgColor}}><span style={{color: fColor}}>insiide outtt</span></h1>
      <input onChange={emojiHandler}></input>
      <div>{userInput}</div>
      <h3 style={{backgroundColor: fColor}}>Emoji We have</h3>
      {
        emoji.map((emoji) => {
          return <span
                  onClick={() => emojiTeller(emoji)} 
                  style={{fontSize: fSize, padding: "0.5rem", cursor: "pointer"}} key={emoji}>
                  {emoji}
                 </span>
        })
      }
    </div>
  );
}
