import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ipcRenderer } from 'electron';

import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';

const Done: React.FC = () => {
  const [doneTasks, setDoneTasks] = useState<TaskProps[]>([]);

  const getAllDoneTasks = () => {
    ipcRenderer.send('get-all-done');
    ipcRenderer.on('get-all-done', (_event, response) => {
      setDoneTasks(response);
    });
  };

  useEffect(() => {
    getAllDoneTasks();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>Done</h1>
      {doneTasks.length === 0 && (
        <div className="not-task-container d-flex align-items-center justify-content-center">
          <h5>You have not completed any tasks.</h5>
        </div>
      )}
      <div style={{ height: 15 }} />
      {doneTasks.length > 0 &&
        doneTasks.map((task) => (
          <div key={task.key}>
            <TodoCard
              priority={task.priority}
              done={task.done}
              title={task.description}
              project={task.project}
              context={task.context}
              duedate={task.dueDate}
            />
          </div>
        ))}
    </motion.div>
  );
};

export default Done;
