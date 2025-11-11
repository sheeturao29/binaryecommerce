import React from "react";

const TermsConditions = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">Terms & Conditions</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-700 space-y-6">
        <p>
          Welcome to <strong>Binary Closet</strong>. By using our website, you agree to
          comply with our terms and conditions. Please read them carefully.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>All prices are subject to change without prior notice.</li>
          <li>Users must not misuse our services or violate our policies.</li>
          <li>All designs, logos, and content are owned by Binary Closet.</li>
          <li>Orders can be canceled or modified only before shipment.</li>
        </ul>
        <p>
          Violation of these terms may result in suspension of your account or denial of
          future services.
        </p>
      </div>
      <div className="text-center mt-10">
        <a href="/" className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition">
          ← Back to Home
        </a>
      </div>
    </section>
  );
};

export default TermsConditions;
