import React from "react";

const JoinOurTeam = () => {
  return (
    <section className="py-16 px-6 md:px-24 bg-yellow-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10 text-yellow-800">Join Our Team</h1>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 text-gray-700 space-y-6">
        <p>
          Want to be a part of something creative? Binary Closet is always looking for
          passionate individuals in design, marketing, web development, and customer
          relations.
        </p>
        <p>
          We believe in creativity, collaboration, and growth. Whether you’re a fresher or
          an experienced pro, if fashion excites you — we’d love to hear from you!
        </p>
        <p>
          Send your CV and portfolio to{" "}
          <a href="mailto:careers@binarycloset.com" className="text-yellow-600 underline">
            careers@binarycloset.com
          </a>
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

export default JoinOurTeam;
