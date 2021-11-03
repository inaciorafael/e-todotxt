import React from 'react';
import { motion } from 'framer-motion';

const Done: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>Done</h1>
    </motion.div>
  );
};

export default Done;
