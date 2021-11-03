import React from 'react';
import { motion } from 'framer-motion';

const All: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>All</h1>
    </motion.div>
  );
};

export default All;
