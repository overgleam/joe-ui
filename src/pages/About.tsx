import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const About: React.FC = () => {
  const handleClick = () => {
    toast.info("This is the About Page!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">About Page</h1>
      <p>Learn more about us on this page.</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Toast
      </button>
    </motion.div>
  );
};

export default About;
