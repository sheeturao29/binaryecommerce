import React from "react";

const TrackOrder = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Track Your Order
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-700">
        <p className="mb-6">
          Easily track your order using your order ID and registered email or phone number.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your Order ID"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Enter your Email / Phone"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-yellow-400"
          />
        </div>

        <button className="mt-6 w-full md:w-auto bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
          Track Order
        </button>

        <p className="mt-6 text-sm text-gray-600">
          Note: Tracking details will be available once your order is shipped.
        </p>
      </div>
    </section>
  );
};

export default TrackOrder;
