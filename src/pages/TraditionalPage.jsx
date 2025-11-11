import React from "react";
import { useCart } from "../context/Context";

const traditionalItems = [
  {
    id: 1,
    name: "Silk Saree",
    price: 2499,
    img: "https://source.unsplash.com/400x500/?saree,indian",
    category: "Women",
  },
  {
    id: 2,
    name: "Designer Lehenga",
    price: 4999,
    img: "https://source.unsplash.com/400x500/?lehenga,bridal",
    category: "Women",
  },
  {
    id: 3,
    name: "Kurta Set",
    price: 1999,
    img: "https://source.unsplash.com/400x500/?kurta,men",
    category: "Men",
  },
  {
    id: 4,
    name: "Sherwani",
    price: 5999,
    img: "https://source.unsplash.com/400x500/?sherwani,groom",
    category: "Men",
  },
  {
    id: 5,
    name: "Anarkali Suit",
    price: 3499,
    img: "https://source.unsplash.com/400x500/?anarkali,suit",
    category: "Women",
  },
  {
    id: 6,
    name: "Bandhgala Coat",
    price: 4499,
    img: "https://source.unsplash.com/400x500/?bandhgala,coat,indian",
    category: "Men",
  },
  {
    id: 7,
    name: "Embroidered Dupatta",
    price: 1499,
    img: "https://source.unsplash.com/400x500/?dupatta,indian",
    category: "Women",
  },
  {
    id: 8,
    name: "Pathani Suit",
    price: 2799,
    img: "https://source.unsplash.com/400x500/?pathani,suit,men",
    category: "Men",
  },
];

const TraditionalPage = () => {
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-200 pt-24 pb-10 px-6">
      <h1 className="text-4xl font-extrabold text-center mb-10 text-orange-700">
        👑 Traditional Collection — Ethnic & Elegant
      </h1>

      <div className="max-w-7xl mx-auto flex gap-10">
        {/* 🧭 Sidebar Filters */}
        <aside className="w-1/4 hidden md:block sticky top-24 h-[80vh] overflow-y-auto bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-bold mb-4 text-orange-600">Filters</h2>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Category</h3>
            {["Men", "Women"].map((cat) => (
              <label key={cat} className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" className="accent-orange-500" />
                {cat}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Occasion</h3>
            {["Wedding", "Festive", "Casual", "Partywear"].map((oc) => (
              <label key={oc} className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" className="accent-orange-500" />
                {oc}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Color</h3>
            {["Red", "Gold", "Maroon", "Cream", "Navy Blue"].map((col) => (
              <label key={col} className="flex items-center gap-2 text-sm mb-1">
                <input type="checkbox" className="accent-orange-500" />
                {col}
              </label>
            ))}
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Price Range</h3>
            {["Below ₹2000", "₹2000–₹4000", "₹4000–₹6000", "Above ₹6000"].map(
              (price) => (
                <label key={price} className="flex items-center gap-2 text-sm mb-1">
                  <input type="checkbox" className="accent-orange-500" />
                  {price}
                </label>
              )
            )}
          </div>
        </aside>

        {/* 👗 Product Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {traditionalItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg hover:scale-105 transition-transform p-4 flex flex-col items-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-56 w-56 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-lg font-semibold text-center mb-2 text-gray-800">
                {item.name}
              </h2>
              <p className="text-orange-700 font-bold text-lg mb-1">
                ₹{item.price}
              </p>
              <p className="text-green-600 text-sm mb-2">Festive Offer 🎉</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-semibold"
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

export default TraditionalPage;
