import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const add_to_cart = (product) => {
        setCart((prev) => [...prev, product])
    }

    return (
        <CartContext.Provider value={{ add_to_cart, cart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;