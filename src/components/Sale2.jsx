import React from "react";
import { modell3, modell5 } from "../assests";
import { useNavigate } from "react-router-dom";

const Sale2 = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-gradient-to-r from-blue-200 to-yellow-200">
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 px-4 md:px-20">
        <div className="flex-1 rounded-lg overflow-hidden relative">
          <img
            src={modell3}
            alt="Sale3"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex-1 rounded-lg overflow-hidden relative">
          <img
            src={modell5}
            alt="Sale4"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Clickable traditional sale section */}
        <div
          onClick={() => navigate("/traditional")}
          className="flex-1 bg-yellow-400 rounded-lg flex flex-col justify-center items-center p-6 text-center font-bold text-lg cursor-pointer hover:bg-yellow-500 transition"
        >
          <p className="text-4xl mb-2">The Iconic Ones</p>
          <p>Styles you'd love to try</p>
          <p>Only on BINARY's CLOSET</p>
          <p>For you, by us</p>
        </div>
      </div>
    </section>
  );
};

export default Sale2;
