import React from "react";

const PromotionsTerms = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">Promotions Terms</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-700 space-y-6">
        <p>
          Promotional offers are valid for a limited time and cannot be combined with
          other discounts unless specified.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Coupons are valid for one-time use only.</li>
          <li>Binary Closet reserves the right to modify or cancel promotions.</li>
          <li>Discounts do not apply to gift cards or special collections.</li>
        </ul>
      </div>
      <div className="text-center mt-10">
        <a href="/" className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default PromotionsTerms;
