


export const Header=({heading, Handlechange})=>{
    return (
        <div>
             <h1>{heading}</h1>
        <button onClick={Handlechange}>change</button>
        </div>
        
    )
}