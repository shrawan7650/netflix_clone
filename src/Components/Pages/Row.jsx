import Card from "./Card";
import "./Home.css";
const Row = ({ title, arr, imgUrl }) => (
  <div className="row">
    <h2>{title}</h2>

    <div>
      {arr.map((item) => (
        <Card key={item} img={`${imgUrl}/${item.poster_path}`} />
      ))}
    </div>
  </div>
);
export default Row;
