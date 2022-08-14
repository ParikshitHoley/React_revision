import logo from './logo.svg';
import './App.css';
import {Show} from "./comp/Show";
import {useState} from "react"
function App() {
  const [auth,setAuth] = useState(true)
  
  return (
    <div className="App">
    {auth? <Show/> : null}
    <button onClick={()=>{
      setAuth(!auth)
    }}>toggle</button>
    </div>
  );
}

export default App;
