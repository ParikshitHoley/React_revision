import logo from './logo.svg';
import './App.css';
import {Counter} from "./comp/Counter"
import {useState} from "react";
import {Header} from "./comp/Header"

function App() {
  const [what,setWhat] =useState(true)
  const [heading,setHeading] =useState("school")
  const Handlechange=()=>{
    setHeading("masai")
  }
  return (
    <div className="App">
      {what ? <Counter/> : null}
      <button onClick={()=>{
        setWhat(!what)
      }} >toggle</button>
      <Header heading={heading} Handlechange={Handlechange}/>
    </div>
  );
}

export default App;
