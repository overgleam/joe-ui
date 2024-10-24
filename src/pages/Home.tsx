import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const handleClick = () => {
    toast.success("Welcome to the Home Page!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <p>Welcome to the Home page!</p>
      <button
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Show Toast
      </button>
    </motion.div>
  );
};

export default Home;
