import React, {useState} from "react";

import "./styles.css";

export default function App() {
  const[num1,setNum1] = useState();
  const[num2,setNum2] = useState();
  const[answer,setAnswer] = useState();

  const changeNum1 = (event)=> {
    setNum1(event.target.value);
  };
  const changeNum2 = (event)=> {
    setNum2(event.target.value);
  };

  const handleClick = () => {
    var sum = Number(num1) + Number(num2);
    setAnswer(sum);
  };
  
  return (
    <>
    <input onChange={changeNum1}value={num1}/>
    <input onChange={changeNum2}value={num2}/>
    <button onClick={handleClick}>ADD</button>
    <div>{answer}</div>
    </>
  );
}

