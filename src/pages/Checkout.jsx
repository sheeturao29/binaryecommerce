// src/pages/Checkout.jsx
import React from "react";
import { useCart } from "../context/Context";

const Checkout = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="pt-28 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-700">Checkout 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty!</p>
      ) : (
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-yellow-600 font-medium">₹{item.price}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-between mt-6 text-lg font-semibold">
            <span>Total:</span>
            <span className="text-yellow-600">₹{total}</span>
          </div>

          <button className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-bold transition">
            Proceed to Payment
          </button>
        </div>
      )}
    </section>
  );
};

export default Checkout;
