import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/Context";

const allProducts = [
  {
    id: 1,
    name: "Men's Jacket",
    price: 1499,
    img: "https://via.placeholder.com/400x450?text=Men+Jacket",
    desc: "Stylish men's winter jacket perfect for all occasions.",
    category: "Men",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Women's Dress",
    price: 1299,
    img: "https://via.placeholder.com/400x450?text=Women+Dress",
    desc: "Elegant women's dress with comfortable fabric and modern fit.",
    category: "Women",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Sneakers",
    price: 1999,
    img: "https://via.placeholder.com/400x450?text=Sneakers",
    desc: "Trendy sneakers for daily wear with top comfort.",
    category: "Unisex",
    rating: 4.6,
  },
  {
    id: 4,
    name: "Casual Top",
    price: 899,
    img: "https://via.placeholder.com/400x450?text=Casual+Top",
    desc: "Comfy cotton top for women with trendy design.",
    category: "Women",
    rating: 4.3,
  },
  {
    id: 5,
    name: "Men's Shirt",
    price: 999,
    img: "https://via.placeholder.com/400x450?text=Men+Shirt",
    desc: "Classic fit men's shirt perfect for formal and casual wear.",
    category: "Men",
    rating: 4.4,
  },
  {
    id: 6,
    name: "Kids Dress",
    price: 799,
    img: "https://via.placeholder.com/400x450?text=Kids+Dress",
    desc: "Cute and comfy kids dress for daily wear.",
    category: "Kids",
    rating: 4.2,
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const product = allProducts.find((item) => item.id === parseInt(id));
  const relatedProducts = allProducts.filter(
    (item) => item.category === product?.category && item.id !== product.id
  );

  if (!product)
    return (
      <div className="min-h-screen flex justify-center items-center text-red-500 text-2xl font-semibold">
        Product not found 😢
      </div>
    );

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 min-h-screen">
      {/* Product Info */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        <img
          src={product.img}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />

        <div className="flex-1 space-y-5">
          <h2 className="text-4xl font-bold text-yellow-700">{product.name}</h2>
          <p className="text-gray-700 text-lg">{product.desc}</p>

          {/* Rating */}
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl">⭐</span>
            <span className="ml-2 text-gray-600">{product.rating} / 5</span>
          </div>

          <p className="text-3xl font-semibold text-yellow-600">
            ₹{product.price}
          </p>

          {/* Size Selector */}
          <div>
            <h4 className="font-semibold mb-2">Select Size</h4>
            <div className="flex gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded-md ${
                    selectedSize === size
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "border-gray-400 text-gray-700"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h4 className="font-semibold mb-2 mt-4">Select Color</h4>
            <div className="flex gap-3">
              {["Black", "White", "Blue", "Red", "Green"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`border px-4 py-2 rounded-md ${
                    selectedColor === color
                      ? "bg-yellow-500 text-white border-yellow-500"
                      : "border-gray-400 text-gray-700"
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={() => addToCart(product)}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => {
                addToCart(product);
                navigate("/checkout");
              }}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-yellow-700">
            You may also like 💛
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="bg-white rounded-xl shadow-lg hover:scale-105 transition cursor-pointer overflow-hidden"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-yellow-600 font-bold mt-1">
                    ₹{item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailPage;
