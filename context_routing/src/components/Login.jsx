import {useState} from "react";
import { useContext } from "react";
import { AuthContext } from "../context/Auth_context";
import {useNavigate} from "react-router-dom";
export const Login=()=>{

    const {state,handleauthChange} = useContext(AuthContext)
    const{auth} = state
    const gotouser = useNavigate();
    const [login,setLogin] =useState({})
    const inputChange=(e)=>{
      e.preventDefault();
      const {placeholder,value} = e.target;
      setLogin({
       ...login,
        [placeholder]: value
      })
    }
    const HnadleSubmit=(e)=>{
        e.preventDefault();
        fetch("https://reqres.in/api/login",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
            
        }).then((res)=>res.json()).then((d)=>{d.error ? handleauthChange(false,d.error) : handleauthChange(true,d.token)} ).then(()=>{auth ? gotouser("/user") : alert("login failed")})
    }
    return(
        <form onSubmit={HnadleSubmit}>
            <input type="email" placeholder="email" onChange={inputChange} />
            <input type="password" placeholder="password" onChange={inputChange}/>
            <input type="submit" />

        </form>
    )
}