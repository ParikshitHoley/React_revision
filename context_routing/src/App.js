import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar"
import {Login} from "./components/Login" ;
import {Routes,Route,Link} from "react-router-dom";
import {User} from "./components/User" 

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/user" element={<User/>} />
    </Routes>

    </div>
  );
}

export default App;
