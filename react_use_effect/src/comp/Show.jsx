import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, {useState,useEffect} from 'react';

export const Show=(props)=>{
    const {ans="masai"} =props;
    const [data,setData]=useState([]);
    const [page,setPage]=useState(1);
     
    useEffect(()=>{

        // methode 1 to fetch
        // function find()
        // {
        //     fetch("http://localhost:8700/users").then((abc)=>abc.json()).then((abc)=>setData([...data,...abc]));
            
        // }

        // find();


        //methode 3 to fetch
        async function find()
        {
            let abc= await fetch(`http://localhost:4500/users?_page=${page}&_limit=4`);
            abc = await abc.json();
            setData([...abc]);
        }
        find();
        
        return ()=>{
            console.log("Iam removed")
        }

    },[ans,page])

    return(
        <div>
        {
            data.map((ele)=>{
                return <div key={ele.id}>
                    <p>{ele.name}</p>
                    <h3>{ele.money}</h3>
                </div>
            })
            

        }
        <button disabled={page===1} onClick={()=>{
            setPage((pre)=>pre-1);
        }}>prev</button>
        <button onClick={()=>{
            setPage((pre)=>pre+1)
        }}>next</button>
        </div>
    )
}

