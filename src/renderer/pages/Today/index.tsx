import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { TodoCard, AddTaskButton } from '../../components';

const Today: React.FC = () => {
  const oldTasks = [
    {
      id: 1,
      title: 'Design a prototype',
      done: false,
      priority: 'A',
      duedate: new Date(2021, 10, 3, 1, 0),
      project: ['+mega', '+viva'],
      context: ['@work'],
    },
    {
      id: 2,
      title: 'Awesome Event',
      done: false,
      priority: 'Z',
      duedate: new Date(2021, 10, 3, 0, 15),
      project: ['+home'],
      context: null,
    },
  ];

  const tasks = [
    {
      id: 2,
      title: 'Simple task with project damasco',
      done: true,
      priority: 'B',
      duedate: new Date(2021, 10, 15, 2, 30),
      project: null,
      context: ['@shopping'],
    },
    {
      id: 4,
      title: 'Change the new kof XIV character',
      done: true,
      priority: 'A',
      duedate: new Date(2021, 10, 18, 14, 35),
      project: ['+kofxiv'],
      context: ['@unity', '@games'],
    },
    {
      id: 3,
      title: 'Send tax return',
      done: true,
      priority: 'C',
      duedate: new Date(2021, 10, 3, 22, 30),
      project: ['+finances'],
      context: ['@supermarker'],
    },
    {
      id: 5,
      title: 'Make a new wallpaper for Behance',
      done: true,
      priority: 'R',
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
      <div style={{ height: 5 }} />
      <div className="d-flex align-items-center justify-content-between">
        <h5>{dayjs().format('DD ddd MMMM YYYY')}</h5>
        <AddTaskButton />
      </div>
      <div style={{ height: 15 }} />
      <h5>Overdue</h5>
      {oldTasks.map((task) => (
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
      <div style={{ height: 15 }} />
      <h5>Within today</h5>
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

export default Today;
