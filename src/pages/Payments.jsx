import React from "react";

const Payments = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">Fees & Payments</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-700 space-y-6">
        <p>
          Binary Closet accepts multiple payment methods including UPI, debit/credit
          cards, and wallets. All payments are processed securely through verified
          gateways.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>No additional charges for prepaid orders.</li>
          <li>COD orders may include a minimal handling fee.</li>
          <li>Refunds will be processed through the same payment method.</li>
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

export default Payments;
