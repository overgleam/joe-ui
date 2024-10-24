import { motion } from "framer-motion";
import { MeteorDemo } from "@/components/Meteor";

const Alforque = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
    >
      <MeteorDemo />
    </motion.div>
  );
};

export default Alforque;
