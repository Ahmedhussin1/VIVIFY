import "./FifthButton.scss";
import { Link } from "react-router-dom";
// function to make route to the page from the beginning 
function FifthButton({ title, link, id }) {
  return (
    <Link to={link} id={id}>
      <button className="fifth-button">
        {title}
      </button>
    </Link>
  );
}

export default FifthButton;
