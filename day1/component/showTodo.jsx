export const ShowTodo=(props)=>{
    const {arr=[],handler,handledelete} =props;
    return (
        <div>
       {arr.map((todo)=>{
        return (
            <div key={todo.id}>
                <p>{todo.title}</p>
                <h1>{todo.status ? "done" : "not done"}</h1>
                <button onClick={()=>{
                    handler(todo.id)
                }}>toggle todo</button>
                <button onClick={()=>{
                    handledelete(todo.id)
                }}>delete</button>
            </div>
        )
       })}
            
        </div>
    )
}