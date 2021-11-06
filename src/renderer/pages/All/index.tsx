import React from 'react';
import { motion } from 'framer-motion';

import { TodoCard } from '../../components';

const All: React.FC = () => {
  const tasks = [
    {
      id: 12,
      title: 'Design a prototype',
      done: true,
      priority: 'A',
      duedate: new Date(2021, 10, 3, 1, 0),
      project: ['+mega', '+viva'],
      context: ['@work'],
    },
    {
      id: 24,
      title: 'Awesome Event',
      done: true,
      priority: 'A',
      duedate: new Date(2021, 10, 3, 0, 15),
      project: ['+home'],
      context: null,
    },
    {
      id: 2,
      title: 'Simple task with project damasco',
      done: false,
      priority: 'A',
      duedate: new Date(2021, 10, 15, 2, 30),
      project: null,
      context: ['@shopping'],
    },
    {
      id: 4,
      title: 'Change the new kof XIV character',
      done: false,
      priority: 'B',
      duedate: new Date(2021, 10, 18, 14, 35),
      project: ['+kofxiv'],
      context: ['@unity', '@games'],
    },
    {
      id: 3,
      title: 'Send tax return',
      done: false,
      priority: 'C',
      duedate: new Date(2021, 10, 3, 22, 30),
      project: ['+finances'],
      context: ['@supermarker'],
    },
    {
      id: 5,
      title: 'Make a new wallpaper for Behance',
      done: false,
      priority: 'C',
      duedate: null,
      project: null,
      context: ['@web', '@internet'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>All</h1>
      <div style={{ height: 15 }} />
      {tasks.map((task) => (
        <TodoCard
          key={task.id}
          priority={task.priority}
          done={task.done}
          title={task.title}
          project={task.project}
          context={task.context}
          duedate={task.duedate}
        />
      ))}
    </motion.div>
  );
};

export default All;
