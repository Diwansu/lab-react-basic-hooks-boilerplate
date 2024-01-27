import { useState } from "react";
import "../App.css"

function UseState(){

  const [currSib, setSib] = useState(0);
  

  const handleSib = ()=>{
    setSib(currSib+1);
  }


  return (
    <div>
        <p> {currSib}</p>
      <button onClick={handleSib}>Like</button>
    </div>
  );
}

export default UseState;