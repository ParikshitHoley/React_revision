import logo from './logo.svg';
import './App.css';
import {Input} from "./component/Input"
import {useState} from "react";
import {ShowTodo} from "./component/showTodo"
import {useEffect} from "react";
function App() {

   const [but,setBut] = useState(true);

   const changebut=()=>{
    setBut(!but);
   }

  const getData=async()=>{
    let data = await fetch("http://localhost:8080/todo");
    let res = await data.json();
    setTodo(res)
  }
 

   


  useEffect(()=>{
        getData();
       
  },[but])
  

  






  const [todo,setTodo] =useState([])
  
 console.log(todo)

  const updateTodo=(id)=>{
    let newtodo =todo.map((ele)=>ele.id==id? {...ele,status:!ele.status} : ele)
    setTodo(newtodo);
  }
  

  const deletetodo=(id)=>{
    fetch(`http://localhost:8080/todo/${id}`,{
      method : "DELETE",
      
     
     }).then(()=>getData())
  }

  const addtodo=(newitem)=>{
    
   fetch("http://localhost:8080/todo",{
    method : "POST",
    body : JSON.stringify(newitem),
    headers : {
      "content-type" : "application/json"
    }
   }).then(()=>getData())

   

  }
  
  return (
    <div className="App">
     <Input addtodo={addtodo}/>
     <ShowTodo arr={todo} handler={updateTodo} handledelete={deletetodo}/>
     <button onClick={changebut}>change</button>
    </div>
  );
}



export default App;
