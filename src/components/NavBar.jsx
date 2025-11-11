import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { loogo } from "../assests";
import { Search, User, ShoppingCart } from "lucide-react";
import { useCart } from "../context/Context"; // ✅ Correct path

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { cart } = useCart();

  // 🧭 Menu structure
  const menuItems = [
    {
      title: "Women",
      submenu: ["Tops", "Dresses", "Jeans", "Shoes", "Accessories"],
    },
    {
      title: "Men",
      submenu: ["Shirts", "Trousers", "Jackets", "Shoes", "Watches"],
    },
    {
      title: "Kids",
      submenu: ["Boys", "Girls", "Footwear", "Toys"],
    },
    {
      title: "Home & Living",
      submenu: ["Bedding", "Decor", "Kitchen", "Furniture", "Lighting"],
    },
    {
      title: "Beauty",
      submenu: ["Makeup", "Skincare", "Haircare", "Fragrance", "Bath & Body"],
    },
    {
      title: "Studio",
      submenu: ["Inspiration", "Looks", "Style Tips", "Trends"],
    },
    {
      title: "Shop",
      submenu: ["Winter Collection", "Summer Sale", "New Arrivals", "Exclusive"],
    },
  ];

  return (
    <>
      {/* 🧭 Navbar */}
      <nav className="w-full bg-white shadow-md fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* 🪄 Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={loogo}
              alt="Binary Closet"
              className="h-10 w-10 rounded-full object-cover"
            />
            <h1 className="font-bold text-xl text-gray-800">BINARY CLOSET</h1>
          </Link>

          {/* 🔍 Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-1 w-72 bg-gray-50">
            <input
              type="text"
              placeholder="Search BINARY"
              className="w-full outline-none text-gray-600 bg-transparent"
            />
            <button className="ml-2 text-gray-500 hover:text-yellow-600 transition">
              <Search size={18} />
            </button>
          </div>

          {/* 🧾 Menu */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            {/* 🏠 Home */}
            <li>
              <Link
                to="/"
                className="hover:text-yellow-600 transition font-semibold"
              >
                Home
              </Link>
            </li>

            {/* Dropdown Menus */}
            {menuItems.map((item, index) => (
              <li
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.title)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="hover:text-yellow-600 transition">
                  {item.title}
                </button>

                <AnimatePresence>
                  {activeDropdown === item.title && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2"
                    >
                      {item.submenu.map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            to={`/category/${sub.toLowerCase()}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-700 transition"
                          >
                            {sub}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* 🛒 Icons */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={() => navigate("/cart")}
              className="relative text-gray-600 hover:text-yellow-600 transition"
            >
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>

            {/* User Login */}
            <button
              className="text-gray-600 hover:text-yellow-600 transition"
              onClick={() => setShowSidebar(true)}
            >
              <User size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* 🧑‍💻 Sidebar Login */}
      <AnimatePresence>
        {showSidebar && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSidebar(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 p-6"
            >
              <button
                className="text-gray-500 hover:text-red-500 absolute top-4 right-4 text-lg"
                onClick={() => setShowSidebar(false)}
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? "Login" : "Sign Up"}
              </h2>

              <form className="flex flex-col gap-4">
                {!isLogin && (
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="border p-2 rounded-md outline-none"
                  />
                )}
                <input
                  type="email"
                  placeholder="Email"
                  className="border p-2 rounded-md outline-none"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border p-2 rounded-md outline-none"
                />
                <button className="bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition">
                  {isLogin ? "Login" : "Sign Up"}
                </button>
              </form>

              <p className="text-sm text-gray-500 text-center mt-4">
                {isLogin ? (
                  <>
                    Don’t have an account?{" "}
                    <span
                      className="text-yellow-600 cursor-pointer"
                      onClick={() => setIsLogin(false)}
                    >
                      Sign up
                    </span>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <span
                      className="text-yellow-600 cursor-pointer"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </span>
                  </>
                )}
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
