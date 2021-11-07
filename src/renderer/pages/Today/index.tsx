import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { AddTaskButton } from '../../components';

const Today: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <div style={{ height: 5 }} />
      <div className="d-flex align-items-center justify-content-between">
        <h5>{dayjs().format('DD ddd MMMM YYYY')}</h5>
        <AddTaskButton />
      </div>
      <div style={{ height: 15 }} />
      <h5>Overdue</h5>
      <div style={{ height: 15 }} />
      <h5>Within today</h5>
      <div style={{ height: 15 }} />
      <h5>Done</h5>
    </motion.div>
  );
};

export default Today;
