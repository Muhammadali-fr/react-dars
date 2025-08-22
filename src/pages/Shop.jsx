import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export const Shop = () => {
    const [array, setArray] = useState([
        {
            id: 0,
            name: "Wireless Headphones",
            description: "Noise-cancelling over-ear Bluetooth headphones with 30h battery life.",
            price: 79.99,
            category: "Electronics",
            stock: 25,
            image: "/images/headphones.jpg"
        },
        {
            id: 1,
            name: "Smart Watch",
            description: "Water-resistant smartwatch with fitness tracking and heart rate monitor.",
            price: 129.99,
            category: "Electronics",
            stock: 18,
            image: "/images/smartwatch.jpg"
        },
        {
            id: 2,
            name: "Running Shoes",
            description: "Lightweight and breathable running shoes for all terrains.",
            price: 59.99,
            category: "Sports",
            stock: 40,
            image: "/images/shoes.jpg"
        },
        {
            id: 3,
            name: "Gaming Mouse",
            description: "RGB backlit ergonomic gaming mouse with 6 programmable buttons.",
            price: 39.99,
            category: "Electronics",
            stock: 30,
            image: "/images/mouse.jpg"
        },
        {
            id: 4,
            name: "Cotton T-Shirt",
            description: "100% cotton unisex t-shirt available in multiple colors.",
            price: 14.99,
            category: "Clothing",
            stock: 100,
            image: "/images/tshirt.jpg"
        },
        {
            id: 5,
            name: "Leather Wallet",
            description: "Slim bi-fold leather wallet with RFID protection.",
            price: 29.99,
            category: "Accessories",
            stock: 50,
            image: "/images/wallet.jpg"
        },
        {
            id: 6,
            name: "Portable Speaker",
            description: "Compact waterproof Bluetooth speaker with deep bass.",
            price: 45.99,
            category: "Electronics",
            stock: 22,
            image: "/images/speaker.jpg"
        },
        {
            id: 7,
            name: "Backpack",
            description: "Durable waterproof backpack with multiple compartments.",
            price: 49.99,
            category: "Bags",
            stock: 35,
            image: "/images/backpack.jpg"
        },
        {
            id: 8,
            name: "Sunglasses",
            description: "UV-protected polarized sunglasses for men and women.",
            price: 24.99,
            category: "Accessories",
            stock: 60,
            image: "/images/sunglasses.jpg"
        },
        {
            id: 9,
            name: "Coffee Maker",
            description: "Programmable drip coffee maker with 12-cup capacity.",
            price: 89.99,
            category: "Home Appliances",
            stock: 15,
            image: "/images/coffeemaker.jpg"
        }
    ]);

    const {add_to_cart} = useContext(CartContext);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-center mb-10">🛒 Our Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {array.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="font-bold text-lg">{product.name}</h2>
                            <p className="text-gray-500 text-sm mt-1">{product.description}</p>
                            <p className="text-blue-700 font-semibold text-lg mt-3">
                                {product.price} so'm
                            </p>

                            <div className="flex justify-between items-center mt-5">
                                <span className="text-sm text-gray-400">Stock: {product.stock}</span>
                                <Link to={`/product/${product.name}`}>
                                    <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition">
                                        Ko‘rish
                                    </button>
                                </Link>

                                <button onClick={() => add_to_cart(product)} className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition">
                                    add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>


    );
};
