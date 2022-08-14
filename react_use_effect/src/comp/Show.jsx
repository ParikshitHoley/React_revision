import React, {useState,useEffect} from 'react';

export const Show=()=>{
    const [data,setData]=useState([]);
    
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
            let abc= await fetch("http://localhost:8700/users");
            abc = await abc.json();
            setData([...data,...abc]);
        }
        find();
        
        return ()=>{
            console.log("Iam removed")
        }

    },[])

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
        </div>
    )
}