import React, { useState, useEffect } from "react";
import { useCart } from "../context/Context";

const BestPicksPage = () => {
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    category: [],
    brand: [],
    color: [],
    size: [],
    discount: [],
  });
  const { addToCart } = useCart();

  // Dummy data with placeholder images
  useEffect(() => {
    const dummyProducts = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      title: `Best Pick ${i + 1}`,
      category: ["men's clothing", "women's clothing", "electronics", "jewelery"][i % 4],
      brand: ["Nike", "Adidas", "Puma", "Levi’s"][i % 4],
      color: ["Red", "Blue", "Green", "Black"][i % 4],
      size: ["S", "M", "L", "XL"][i % 4],
      discount: ["10% OFF", "20% OFF", "30% OFF", "50% OFF"][i % 4],
      price: Math.floor(Math.random() * 2000) + 500,
      image: `https://picsum.photos/seed/best${i + 1}/300/350`,
    }));
    setProducts(dummyProducts);
  }, []);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const filteredProducts =
    selectedFilters.category.length === 0
      ? products
      : products.filter((p) => selectedFilters.category.includes(p.category));

  return (
    <div className="min-h-screen bg-yellow-100 pt-24 pb-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-yellow-700">
        ✨ Best Picks — Top Trending Products
      </h1>

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* Sidebar */}
        <aside className="w-1/4 hidden md:block sticky top-24 h-[80vh] overflow-y-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-yellow-600">Filters</h2>
          {["men's clothing", "women's clothing", "electronics", "jewelery"].map((cat) => (
            <label key={cat} className="flex items-center gap-2 text-sm mb-1">
              <input
                type="checkbox"
                onChange={() => handleFilterChange("category", cat)}
                checked={selectedFilters.category.includes(cat)}
                className="accent-yellow-500"
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </aside>

        {/* Products */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform p-4 flex flex-col items-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-56 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-sm font-semibold text-center mb-2">{item.title}</h2>
              <p className="text-yellow-700 font-bold text-lg">₹{item.price}</p>
              <p className="text-green-600 text-sm mb-2">{item.discount}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-auto bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default BestPicksPage;
