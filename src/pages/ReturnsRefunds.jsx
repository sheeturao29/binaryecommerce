import React from "react";

const ReturnsRefunds = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Returns & Refunds Policy
      </h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-700 leading-relaxed space-y-6">
        <p>
          At <strong>Binary Closet</strong>, your satisfaction is our top priority! If you’re not
          completely happy with your purchase, we make returns and refunds easy.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-700">Eligibility for Returns</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Return request must be made within 7 days of delivery.</li>
          <li>Items should be unused, unwashed, and in their original packaging.</li>
          <li>Tags and accessories must be intact.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-700">Refund Process</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            Once your return is approved, the refund will be initiated to your
            original payment method within 5–7 business days.
          </li>
          <li>
            For COD orders, refunds will be issued via bank transfer or wallet credit.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-yellow-700">Exchange Policy</h2>
        <p>
          You can request an exchange for size or color within 7 days. Exchanges are
          subject to stock availability.
        </p>

        <p>
          Need help? Contact us at{" "}
          <a
            href="mailto:support@binarycloset.com"
            className="text-yellow-600 underline"
          >
            support@binarycloset.com
          </a>{" "}
          or call us at <span className="font-semibold">+91 9876543210</span>.
        </p>
      </div>

      <div className="text-center mt-10">
        <a
          href="/"
          className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
        >
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default ReturnsRefunds;
