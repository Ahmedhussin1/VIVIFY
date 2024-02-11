import "./ScrollCardStyle.scss";
import Card from "./ScrollCard";

const ScrollCards = ({cardData}) => {
  return (
    <div className="App">
      {cardData.map((data, i) => (
        <Card key={i} title={data.title} img={data.img} index={i} />
      ))}
    </div>
  );
};
export default ScrollCards;
