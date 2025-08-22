import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const Cart = () => {
  const { cart } = useContext(CartContext);

  const subTotal = cart.reduce((jami, narx) => {
    return jami + narx.price;
  }, 0)

  return (
    <div>
      {cart.map((item, i) => (
        <div key={i}>
          <p>{item.name}</p>
        </div>
      ))}
      
      <p>jami summa: {subTotal.toFixed(2)}so'm</p>
    </div>
  )
}

export default Cart;
