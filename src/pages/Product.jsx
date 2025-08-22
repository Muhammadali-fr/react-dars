
import { useParams } from "react-router-dom"
import { useState } from "react";

const Product = () => {
    const { name } = useParams()
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

    const [mahsulot] = array.filter((item) => {
        return item.name === name
    })
    console.log(mahsulot);
    

    if (!mahsulot) {
        return (
            <div>
                mahsulot yoq ekan
            </div>
        )
    }

    return (
        <div>
            <p className='font-bold'>{mahsulot.name}</p>
            <p>{mahsulot.description}</p>
            <p className='text-sm'>{mahsulot.price} so'm</p>

        </div>
    )
}

export default Product