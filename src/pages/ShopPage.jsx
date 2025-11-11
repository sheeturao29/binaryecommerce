import React from "react";
import { useCart } from "../context/Context";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Men's Jacket", price: 1499, img: "https://via.placeholder.com/300x350?text=Men+Jacket" },
  { id: 2, name: "Women's Dress", price: 1299, img: "https://via.placeholder.com/300x350?text=Women+Dress" },
  { id: 3, name: "Sneakers", price: 1999, img: "https://via.placeholder.com/300x350?text=Sneakers" },
];

const ShopPage = () => {
  const { addToCart } = useCart();

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-700">
        Explore Our Collection 👕👗
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
       {products.map((item) => (
  <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition overflow-hidden">
    <Link to={`/product/${item.id}`}>
      <img src={item.img} alt={item.name} className="w-full h-80 object-cover" />
    </Link>
    <div className="p-4 text-center">
      <h3 className="text-lg font-semibold">
        <Link to={`/product/${item.id}`} className="hover:text-yellow-600">
          {item.name}
        </Link>
      </h3>
      <p className="text-yellow-600 font-bold mt-1">₹{item.price}</p>

      <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={() => addToCart(item)}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            addToCart(item);
            window.location.href = "/checkout";
          }}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
))}

      </div>
    </section>
  );
};

export default ShopPage;
