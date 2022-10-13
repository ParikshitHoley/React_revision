
export default function Image(props){
  const {title,src,alt,width,height} =props
  return(
    <div>
      <h2>{title}</h2>
      <img src={src} width={width} height={height} alt={alt}/>
    </div>
  )
}// Write Code here
