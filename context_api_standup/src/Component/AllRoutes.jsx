import {Routes , Route} from "react-router-dom";
import {Product} from "./Product"
import {User} from "./User";
import { UserDetails } from "./UserDetails";
export const AllRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<h>home</h>}></Route>
            <Route path="/about" element={<Product/>}></Route>
            <Route path="/contact" element={<h>contact</h>}></Route>
            <Route path="/user" element={<User/>}></Route>
            <Route path="/user/:id" element={<UserDetails/>}></Route>
            
        </Routes>
        
    )
}