import React from "react";
import { useCart } from "../context/Context";
import {  useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="pt-24 pb-16 px-6 md:px-20 bg-yellow-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-yellow-700 text-center">🛍 Your Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty 🥺</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-6 items-center bg-white shadow-md p-4 rounded-lg">
                  <img src={item.image || item.img} alt={item.name} className="w-24 h-24 object-contain" />
                  <div className="flex-1">
                    <h2 className="font-semibold">{item.title || item.name}</h2>
                    <p className="text-yellow-600 font-bold">₹{item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="bg-gray-200 px-2 rounded">-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="bg-gray-200 px-2 rounded">+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 font-semibold hover:text-red-700"
                  >
                    ✕ Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Checkout Summary */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="text-gray-700 mb-2">Total Items: {cart.length}</p>
              <p className="text-gray-700 mb-4">Total Price: ₹{total.toFixed(2)}</p>

              <button
                onClick={() => navigate("/checkout")}
                className="bg-yellow-500 hover:bg-yellow-600 text-white w-full py-2 rounded-lg font-semibold"
              >
                Proceed to Checkout
              </button>

              <button
                onClick={clearCart}
                className="mt-3 text-sm text-gray-500 underline w-full"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
