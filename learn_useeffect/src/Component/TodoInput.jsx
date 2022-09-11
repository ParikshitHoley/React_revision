import {useState} from "react";

export const TodoInput=()=>{

    const [todo,setTodo] = useState({})

    const Handlechange = (e)=>{
      const {id,value} = e.target
      

      setTodo({...todo,
       [id] : value
        
    })
    }


    const Handlesubmit = (e)=>{
        e.preventDefault();
        
        fetch(`http://localhost:8080/todolist`,{
            method : "POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(todo)
        })

    }

    return(
        <form onSubmit={Handlesubmit}>
            <input type="text" placeholder="Enter task" onChange={Handlechange} id="task" />
            <input type="date" onChange={Handlechange} id="date" />
            <input type="text" onChange={Handlechange} id="status" placeholder="status"/>
            <input type="submit" />
        </form>
    )
}
