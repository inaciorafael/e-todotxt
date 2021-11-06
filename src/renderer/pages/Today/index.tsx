import React from 'react';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import { TodoCard, AddTaskButton } from '../../components';

const Today: React.FC = () => {
  const oldTasks = [
    {
      id: 2,
      title: 'Studying the electron framework',
      done: false,
      priority: 'Z',
      duedate: new Date(2021, 10, 6, 10, 15),
      project: ['+learn'],
      context: ['@home'],
    },
  ];

  const tasks = [
    {
      id: 3,
      title: 'Put screenshots in Readme.md on GitHub',
      done: false,
      priority: 'A',
      duedate: new Date(2021, 10, 6, 21, 0),
      project: ['+etodo.txt'],
      context: ['@home'],
    },
    {
      id: 4,
      title: 'Create scrot script to select window',
      done: false,
      priority: 'B',
      // duedate: new Date(2021, 10, 6, 17, 40),
      project: ['+linuxrice'],
      context: null,
    },
    {
      id: 20,
      title: 'Create Javascript library to consume todo.txt and done.txt files',
      done: false,
      priority: 'C',
      duedate: new Date(2021, 10, 6, 23, 30),
      project: ['+etodo.txt'],
      context: ['@home'],
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
      <div style={{ height: 15 }} />
      <h5>Done</h5>
      <TodoCard
        priority="A"
        done
        title="Send screenshot to community on Gitter"
        project={['+etodo.txt']}
        context={['@home']}
        duedate={new Date(2021, 10, 6, 15, 0)}
      />
    </motion.div>
  );
};

export default Today;
