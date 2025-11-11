import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // ✅ added useNavigate
import { useCart } from "../context/Context";

const DropdownCategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate(); // ✅ initialize navigate
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    brand: [],
    color: [],
    size: [],
    discount: [],
  });

  useEffect(() => {
    // Generate random demo products for each subcategory
    const dummyProducts = Array.from({ length: 20 }, (_, i) => ({
      id: i + 1,
      title: `${categoryName} ${i + 1}`,
      brand: ["Zara", "H&M", "Levi’s", "Only", "Forever 21"][i % 5],
      color: ["Red", "Blue", "Black", "White", "Pink"][i % 5],
      size: ["S", "M", "L", "XL"][i % 4],
      discount: ["10% OFF", "20% OFF", "30% OFF", "40% OFF"][i % 4],
      price: Math.floor(Math.random() * 1200) + 499,
      image: `https://picsum.photos/seed/${categoryName}${i}/300/350`,
      desc: `Stylish ${categoryName} item number ${i + 1}. Perfect for fashion lovers!`,
    }));
    setProducts(dummyProducts);
  }, [categoryName]);

  // Filter handling
  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };

  const filteredProducts = products.filter((item) => {
    const matchesBrand =
      selectedFilters.brand.length === 0 ||
      selectedFilters.brand.includes(item.brand);
    const matchesColor =
      selectedFilters.color.length === 0 ||
      selectedFilters.color.includes(item.color);
    const matchesSize =
      selectedFilters.size.length === 0 ||
      selectedFilters.size.includes(item.size);
    const matchesDiscount =
      selectedFilters.discount.length === 0 ||
      selectedFilters.discount.includes(item.discount);
    return matchesBrand && matchesColor && matchesSize && matchesDiscount;
  });

  const heading =
    categoryName.charAt(0).toUpperCase() + categoryName.slice(1).replace("-", " ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-yellow-100 pt-24 pb-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-pink-700">
        ✨ {heading} Collection
      </h1>

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* Sidebar Filters */}
        <aside className="w-1/4 hidden md:block sticky top-24 h-[80vh] overflow-y-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-pink-600">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Brand</h3>
            {["Zara", "H&M", "Levi’s", "Only", "Forever 21"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("brand", brand)}
                  checked={selectedFilters.brand.includes(brand)}
                  className="accent-pink-500"
                />
                {brand}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Color</h3>
            {["Red", "Blue", "Black", "White", "Pink"].map((color) => (
              <label key={color} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("color", color)}
                  checked={selectedFilters.color.includes(color)}
                  className="accent-pink-500"
                />
                {color}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Size</h3>
            {["S", "M", "L", "XL"].map((size) => (
              <label key={size} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("size", size)}
                  checked={selectedFilters.size.includes(size)}
                  className="accent-pink-500"
                />
                {size}
              </label>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-2">Discount</h3>
            {["10% OFF", "20% OFF", "30% OFF", "40% OFF"].map((disc) => (
              <label key={disc} className="flex items-center gap-2 text-sm mb-1">
                <input
                  type="checkbox"
                  onChange={() => handleFilterChange("discount", disc)}
                  checked={selectedFilters.discount.includes(disc)}
                  className="accent-pink-500"
                />
                {disc}
              </label>
            ))}
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)} // ✅ Navigates to product detail page
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform p-4 flex flex-col items-center cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-56 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-sm font-semibold text-center mb-2">
                {item.title}
              </h2>
              <p className="text-pink-700 font-bold text-lg">₹{item.price}</p>
              <p className="text-green-600 text-sm mb-2">{item.discount}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // ✅ Prevent click bubbling
                  addToCart(item);
                }}
                className="mt-auto bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full font-semibold"
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

export default DropdownCategoryPage;
