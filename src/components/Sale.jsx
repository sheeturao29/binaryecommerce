import React from "react";
import { useNavigate } from "react-router-dom";
import { model3, modell4 } from "../assests";

const Sale = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 bg-yellow-200">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-20">
        <div className="flex-1 bg-white rounded-lg overflow-hidden">
          <img src={model3} alt="Sale1" className="w-full h-80 object-cover" />
        </div>
        <div className="flex-1 bg-white rounded-lg overflow-hidden">
          <img src={modell4} alt="Sale2" className="w-full h-80 object-cover" />
        </div>

        {/* Clickable Sale Box */}
        <div
          onClick={() => navigate("/sale")}
          className="flex-1 bg-yellow-400 rounded-lg flex flex-col justify-center items-center p-6 text-center font-bold text-lg cursor-pointer hover:bg-yellow-500 transition"
        >
          WINTER SALE <br /> MIN. 30% OFF
        </div>
      </div>
    </section>
  );
};

export default Sale;
