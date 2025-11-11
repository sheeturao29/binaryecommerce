import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ Import Link

// If you still have local assets
import { model0, model2, model8 } from "../assests";

const servicesData = [
  { img: model8, title: "Best Picks", desc: "MIN.30% OFF", link: "/best-picks" },
  { img: model2, title: "Top Brands", desc: "MIN.30% OFF", link: "/top-brands" },
  { img: model0, title: "Premium Fits", desc: "UP TO 50% OFF", link: "/premium-fits" },
];

const Services = () => {
  return (
    <section className="py-12 bg-gray-50">
      <h2 className="text-4xl text-center font-bold mb-10">Top Fashion Icon</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 md:px-20">
        {servicesData.map((service, idx) => (
          <Link to={service.link} key={idx} className="flex-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-80 md:h-96 object-contain object-center transition-transform duration-500 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
              <p className="text-lg mb-4">{service.desc}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
