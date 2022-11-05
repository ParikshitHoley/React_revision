import logo from './logo.svg';
import './App.css';
import {Timer} from "./component/Timer"
import {useState} from "react";
function App() {
  const [show,setShow] = useState(true)
  return (
    <div className="App">
    <div>{show ? <Timer/> : null}</div>
    <div>
      <button onClick={()=>{
        setShow(!show);
      }}>Hide</button>
    </div>

    </div>
  );
}

export default App;


// 1) mounting  => birth
// 2) updating ==> growth 
// 3) unmounting ==> death