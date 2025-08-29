
// data 
import images from "../data/data";

// react 
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="grid grid-cols-4">
      {
        images.map((img, i) => (
          <li key={i}>
            <Link to={`/i/${img.id}`}>
              <img title={`img id is ${i}`} src={img.Image} alt="image" />
            </Link>
          </li>
        ))
      }
    </div>
  )
}

export default Home