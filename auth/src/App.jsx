import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Input} from "./comp/Input"
import {Show} from "./comp/Show";
import {Done} from "./comp/Done";
function App() {

  const [todo,setTodo]=useState([]);

  const Find=(inp)=>{
    setTodo([...todo,inp])
    console.log(todo)

  }
  const donearr = todo.filter((ele)=>ele.done===true)
  console.log(donearr)

  const done=(id)=>{
    let arr =todo.map((ele)=>ele.id==id? {...ele , done :!ele.done}:ele)
    setTodo(arr)

  }

  return (
    <div className="App">
     <Input Find={Find}/>
     <Show box={todo} done={done}/>
     <Done inp={donearr}/>
    </div>
  );
}

export default App;
