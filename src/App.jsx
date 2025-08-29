
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthLayout from "./layout/AuthLayout";
import { Shop } from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart"

// context 
import CartProvider from "./context/CartContext";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Toaster } from "react-hot-toast";


export default function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<MainLayout />}>
                    <Route index={true} element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                    <Route path="i/:name" element={<Product />} />
                </Route>
                <Route element={<AuthLayout />}>
                    <Route path="auth/register" element={<Register />} />
                    <Route path="auth/login" element={<Login />} />
                </Route>
            </Route>
        )
    )

    return (
        <div>
            <Provider store={store}>
                <Toaster />
                <CartProvider>
                    <RouterProvider router={router} />
                </CartProvider>
            </Provider>
        </div>
    )
}