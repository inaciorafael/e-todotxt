import React from 'react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';

import { WeekCalendar } from '../../components';

const Upcoming: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h2>{dayjs().format('MMMM YYYY')}</h2>
      <WeekCalendar />
    </motion.div>
  );
};

export default Upcoming;
