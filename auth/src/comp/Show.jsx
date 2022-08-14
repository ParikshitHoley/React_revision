export const Show=({box,done})=>{
    return(
        <div>
            {box.map((ele,ind)=>{
                return (
                    <div key={ele.id}>
                        <p>ID : {ele.id}</p>
                        <p>title : {ele.title}</p>
                        <button  onClick={()=>{
                            done(ele.id)
                        }}>{ele.done ? 'Done' : 'Cancel'}</button>
                    </div>
                )
            })}
        </div>

    )
}