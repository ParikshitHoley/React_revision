
import './App.css';
import {Navbar} from "./Component/Navbar";
import {Product} from "./Component/Product";
import {AllRoutes} from "./Component/AllRoutes";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
      <AllRoutes></AllRoutes>
    </div>
  );
}

export default App;
