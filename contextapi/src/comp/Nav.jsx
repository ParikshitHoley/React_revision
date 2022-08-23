import {Link} from "react-router-dom";

export const Nav=()=>{
    const data = [{title:"home", to :"/"},{title:"user", to :"/user"},{title:"about", to :"/about"},{title:"contact", to :"/contact"},{title:"login", to :"/login"}]
    return(
        <div>
            {data.map((e)=>{
                return <div key={e.id} style={{dispaly:"flex",margin:"20px 10px"}}>
                 <Link to={e.to}>{e.title}</Link></div>
               
            })}
        </div>

    )
}