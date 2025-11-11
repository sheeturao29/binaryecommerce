import React from "react";

const RedeemCoupon = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Redeem Your Coupon
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-700 space-y-6">
        <p>
          Have a coupon code? Apply it to get exciting discounts on your next order!
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter Coupon Code"
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
            Apply Coupon
          </button>
        </div>

        <p className="text-sm text-gray-600">
          *Note: Coupons are valid for a limited time and cannot be combined with
          other offers.
        </p>
      </div>
    </section>
  );
};

export default RedeemCoupon;
