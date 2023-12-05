import { useState } from "react";
import Home from "./Home";
// import Yahyo from "./Bilol";

function App() {
  const [num, setNum] = useState(0);
  return (
    <div>

      <h1>{num}{num == 15 ? 'max': num == 0 ? 'min': ''}</h1>
      <button onClick={()=>{
        if(num < 14) {
        setNum(num + 1);
        } else {
          setNum (15);
        }
      }}>+</button>

<button onClick={()=>{
        if (num >= 1) {
          setNum(num - 1)
        } else {
          setNum(0)
        } 
      }}>-</button>


       <button onClick={()=>{
        if(num < 10) {
        setNum(num + 5);
        } else {
          setNum(15)
        }
      }}>+5</button>
      <button onClick={()=>{
        if (num >= 5) {
          setNum(num - 5)
        } else {
          setNum(0)
        } 
      }}>-5</button>
      
      <button onClick={()=> {
        setNum(0);
      }}>reset</button>



      {/* < Home />
      <Bilol /> */}
    </div>
  );
}

export default App;
