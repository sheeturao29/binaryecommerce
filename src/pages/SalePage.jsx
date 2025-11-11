import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ added for navigation
import { useCart } from "../context/Context";

const SalePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    color: [],
    size: [],
    discount: [],
  });
  const { addToCart } = useCart();
  const navigate = useNavigate(); // ✅ initialize navigation

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Handle checkbox selection
  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  // Apply category filtering
  const filteredProducts =
    selectedFilters.category.length === 0
      ? products
      : products.filter((p) =>
          selectedFilters.category.includes(p.category)
        );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 pt-24 pb-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-700">
        ✨ Winter Sale — Up to 50% OFF
      </h1>

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* 🧭 Sidebar Filters */}
        <aside className="w-1/4 hidden md:block sticky top-24 h-[80vh] overflow-y-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Filters</h2>

          {/* Category */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
            {["men's clothing", "women's clothing", "electronics", "jewelery"].map(
              (cat) => (
                <label key={cat} className="flex items-center gap-2 text-sm mb-1">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("category", cat)}
                    checked={selectedFilters.category.includes(cat)}
                    className="accent-yellow-500"
                  />
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </label>
              )
            )}
          </div>

          {/* Brand */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Brand</h3>
            {["Nike", "Adidas", "Puma", "Levi’s", "Zara", "H&M", "Roadster"].map(
              (brand) => (
                <label key={brand} className="flex items-center gap-2 text-sm mb-1">
                  <input
                    type="checkbox"
                    onChange={() => handleFilterChange("brand", brand)}
                    checked={selectedFilters.brand.includes(brand)}
                    className="accent-yellow-500"
                  />
                  {brand}
                </label>
              )
            )}
          </div>

          {/* Color */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Color</h3>
            {["Red", "Black", "Blue", "White", "Green", "Yellow"].map((color) => (
              <label key={color} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("color", color)}
                  checked={selectedFilters.color.includes(color)}
                  className="accent-yellow-500"
                />
                {color}
              </label>
            ))}
          </div>

          {/* Size */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <label key={size} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("size", size)}
                  checked={selectedFilters.size.includes(size)}
                  className="accent-yellow-500"
                />
                {size}
              </label>
            ))}
          </div>

          {/* Discount */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Discount</h3>
            {["10% OFF", "20% OFF", "30% OFF", "50% OFF"].map((disc) => (
              <label key={disc} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("discount", disc)}
                  checked={selectedFilters.discount.includes(disc)}
                  className="accent-yellow-500"
                />
                {disc}
              </label>
            ))}
          </div>
        </aside>

        {/* 🛒 Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 15).map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)} // ✅ click opens product details
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform p-4 flex flex-col items-center cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-56 object-contain mb-4"
              />
              <h2 className="text-sm font-semibold text-center mb-2">
                {item.title}
              </h2>
              <p className="text-yellow-700 font-bold text-lg">
                ₹{(item.price * 83).toFixed(0)}
              </p>
              <p className="text-green-600 text-sm mb-2">30% OFF</p>

              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // ✅ prevent accidental navigation
                    addToCart(item);
                  }}
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold"
                >
                  Add to Cart
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/checkout"); // ✅ direct checkout
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full font-semibold"
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default SalePage;
