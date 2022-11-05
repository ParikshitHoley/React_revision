import logo from './logo.svg';
import './App.css';

import {Navbar} from "./component/Navbar";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Card";
import {Login} from "./pages/Login";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
   <Navbar />
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/login" element={<Login/>}/>
   </Routes>

    </div>
  );
}

export default App;
