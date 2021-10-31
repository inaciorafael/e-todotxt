import React from 'react';
import { motion } from 'framer-motion';

const Today: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <span>Today</span>
    </motion.div>
  );
};

export default Today;
