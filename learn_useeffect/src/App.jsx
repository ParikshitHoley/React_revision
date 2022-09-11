
import './App.css';
import {TodoInput} from "./Component/TodoInput"
import {Show} from "./Component/ShowTodo"
import {Ref} from "./Component/Ref"

function App() {
  
  return (
    <div className="App">
     <TodoInput/>
     <Show/>
     <Ref/>
    
    </div>
  );
}

export default App;
