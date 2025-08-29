import images from "../data/data";
import { useParams } from 'react-router-dom'


const Product = () => {
  const { name } = useParams();

  const [product] = images.filter(i => i.id === name);

  return (
    <div>
      <p>id {name}</p>
      <img src={product.Image} alt="" />
    </div>
  )
}

export default Product