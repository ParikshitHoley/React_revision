import logo from './logo.svg';
import './App.css';
import {Counter} from "./comp/Counter"
import {useState} from "react";
function App() {
  const [what,setWhat] =useState(true)
  return (
    <div className="App">
      {what ? <Counter/> : null}
      <button onClick={()=>{
        setWhat(!what)
      }} >toggle</button>
    </div>
  );
}

export default App;
