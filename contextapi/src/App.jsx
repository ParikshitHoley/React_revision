
import './App.css';
import {Nav} from "./comp/Nav"
import {Routes,Route} from "react-router-dom";
import {Home,About,Contact} from "./comp/Home";
import {User} from "./comp/User";
import {UserDetails} from "./comp/UserDetails";
import {Login} from "./comp/Login";
import {PrivateComponent} from "./comp/PrivateComponent";
function App() {
  return (
    <div className="App">
     <Nav/>
     <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/user/:id" element={<PrivateComponent><UserDetails></UserDetails></PrivateComponent>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
