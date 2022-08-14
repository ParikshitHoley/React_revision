export const Done=({inp})=>{
    return(
        <div>
            <h1>All Done Work</h1>
            {inp.map((ele)=><p>{ele.title}</p>)}
        </div>
    )
}