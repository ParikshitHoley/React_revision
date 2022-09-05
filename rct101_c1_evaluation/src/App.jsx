import "./styles.css";
import Heading from "./Components/Heading";
import Image from "./Components/Image";
import PlayPause from "./Components/PlayPause";
export default function App() {
  return (
    <div className="App">
       <Heading/>
      <Image
        title="Har Har Mahadev"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Dui-CG5_VcIxTHxks0tTiME_1rIvYeIfMA&usqp=CAU"
        alt="image"
        width="100px"
        height="100px"
      />

      <PlayPause/>
      {/* you can comment the below out */}
      {/* <QuestionDescription /> */}
    </div>
  );
}

const QuestionDescription = () => {
  return (
    <div>
      {/* <Heading />
      <Image
        title="Har Har Mahadev"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Dui-CG5_VcIxTHxks0tTiME_1rIvYeIfMA&usqp=CAU"
        alt="image"
        width="160px"
        height="60px"
      />
      <PlayPause /> */}
    </div>
  );
};
