import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">Who We Are</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 leading-relaxed text-gray-700 space-y-6">
        <p>
          <strong>Binary Closet</strong> is an Indian-based online fashion brand built with
          passion for style, comfort, and creativity. We aim to bring the latest fashion
          trends to everyone — from timeless classics to modern streetwear.
        </p>
        <p>
          Our team consists of young designers and tech enthusiasts who believe fashion is
          not just about looks but about confidence and self-expression.
        </p>
        <p>
          Every piece you buy from Binary Closet is curated with care, ensuring both
          quality and sustainability.
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

export default WhoWeAre;
