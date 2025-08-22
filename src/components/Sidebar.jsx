import { Link } from "react-router-dom";
import { Home, ShoppingBag, ShoppingCart, LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();


    const menuItems = [
        { name: "Home", path: "/", icon: <Home size={18} /> },
        { name: "Shop", path: "/shop", icon: <ShoppingBag size={18} /> },
        { name: "Cart", path: "/cart", icon: <ShoppingCart size={18} /> },
    ];

    return (
        <div className="w-[260px] sticky top-0 h-screen bg-gray-900 text-gray-100 flex flex-col">
            {/* Logo */}
            <div className="p-6 text-2xl font-bold border-b border-gray-700">
                MyStore
            </div>

            {/* Menu */}
            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item, idx) => (
                    <Link
                        key={idx}
                        to={item.path}
                        className={`${location.pathname === item.path && "bg-red-800"} flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors`}
                    >
                        {item.icon}
                        <span>{item.name}</span>
                    </Link>
                ))}
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700">
                <Link
                    to="/logout"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
