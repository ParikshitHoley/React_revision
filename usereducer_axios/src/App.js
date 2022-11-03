import logo from './logo.svg';
import './App.css';
import {User} from "./component/User"
import {useReducer} from "react";
import {initialstate,reducer} from "./Reducer"

function App() {
  const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div className="App">
      <User state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
