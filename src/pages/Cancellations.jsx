import React from "react";

const Cancellations = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Order Cancellations
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-700 leading-relaxed space-y-6">
        <p>
          We understand that plans can change! You can cancel your order before it
          is shipped from our warehouse. Once shipped, cancellations are not allowed.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-700">How to Cancel</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Log in to your Binary Closet account.</li>
          <li>Go to “My Orders”.</li>
          <li>Select the order you want to cancel and click on “Cancel Order”.</li>
        </ul>

        <p>
          If your order has already been shipped, you can refuse delivery, and the refund
          will be initiated once the product returns to us.
        </p>

        <p>
          For any assistance, contact{" "}
          <a href="mailto:support@binarycloset.com" className="text-yellow-600 underline">
            support@binarycloset.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default Cancellations;
