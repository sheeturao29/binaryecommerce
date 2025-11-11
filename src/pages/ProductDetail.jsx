import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id,
    name: `Product #${id}`,
    img: `https://via.placeholder.com/400x500?text=Product+${id}`,
    price: 1499 + id * 100,
    desc: "This is a premium quality fashion item from Binary Closet. Perfect for your unique style!"
  };

  return (
    <section className="pt-24 pb-16 px-6 md:px-20 bg-yellow-50 min-h-screen flex flex-col md:flex-row gap-10 items-center">
      <img src={product.img} alt={product.name} className="w-80 h-96 object-cover rounded-xl shadow-lg" />
      <div>
        <h1 className="text-3xl font-bold text-yellow-700 mb-2">{product.name}</h1>
        <p className="text-gray-700 mb-4">{product.desc}</p>
        <p className="text-2xl font-bold text-yellow-600 mb-4">₹{product.price}</p>

        <div className="flex gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-500 text-white px-5 py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              addToCart(product);
              navigate("/checkout");
            }}
            className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
