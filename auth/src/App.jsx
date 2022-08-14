import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import {Input} from "./comp/Input"
import {Show} from "./comp/Show"
function App() {

  const [todo,setTodo]=useState([]);

  const Find=(inp)=>{
    setTodo([...todo,inp])
    console.log(todo)

  }

  const done=(id)=>{
    let arr =todo.map((ele)=>ele.id==id? {...ele , done ? true : false}:ele)
    setTodo(arr)

  }

  return (
    <div className="App">
     <Input Find={Find}/>
     <Show box={todo} done={done}/>
    </div>
  );
}

export default App;
