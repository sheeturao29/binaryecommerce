import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cares1, cares3, cares4 } from "../assests";

const clients = [
  {
    img: cares1,
    desc: "Assured Quality",
    details:
      "Every product at Binary Closet goes through a strict quality check to ensure durability, comfort, and premium craftsmanship.",
  },
  {
    img: cares3,
    desc: "100% Handpicked",
    details:
      "We curate each collection thoughtfully to bring you only the best and most fashionable trends.",
  },
  {
    img: cares4,
    desc: "Easy Exchange",
    details:
      "Didn’t like the fit or color? No worries! We offer a smooth and easy exchange process within 7 days of delivery.",
  },
];

const ClientSection = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-10 text-yellow-800">
        BINARY's CARES
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 md:px-20">
        {clients.map((client, idx) => (
          <motion.div
            key={idx}
            className="flex-1 bg-white rounded-lg p-6 shadow-md cursor-pointer hover:shadow-lg transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => setExpanded(expanded === idx ? null : idx)}
          >
            <img
              src={client.img}
              alt={client.desc}
              className="mx-auto h-16 mb-4"
            />
            <p className="font-semibold text-gray-800">{client.desc}</p>

            <AnimatePresence>
              {expanded === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-sm text-gray-600"
                >
                  <p>{client.details}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ClientSection;
