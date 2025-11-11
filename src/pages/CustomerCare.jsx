import React from "react";

const CustomerCare = () => {
  return (
    <section className="pt-24 pb-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">
        Customer Care
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 text-gray-700 space-y-6">
        <p>
          Our Customer Care team is here to help you with any questions or issues related
          to your order, payments, or delivery.
        </p>

        <h2 className="text-2xl font-semibold text-yellow-700">Get in Touch</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            📧 Email:{" "}
            <a
              href="mailto:support@binarycloset.com"
              className="text-yellow-600 underline"
            >
              support@binarycloset.com
            </a>
          </li>
          <li>📞 Phone: +91 9876543210</li>
          <li>🕒 Working Hours: Monday – Saturday, 9 AM to 7 PM</li>
        </ul>

        <p>
          We aim to respond to all queries within 24 hours. Your satisfaction is our
          top priority 💛.
        </p>
      </div>
    </section>
  );
};

export default CustomerCare;
