import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ipcRenderer } from 'electron';

import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';

const All: React.FC = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const getAllTasks = () => {
    ipcRenderer.send('get-all-tasks');
    ipcRenderer.on('get-all-tasks', (_event, response) => {
      setTasks(response);
    });
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>All</h1>
      {tasks.length === 0 && (
        <div className="not-task-container d-flex align-items-center justify-content-center">
          <h5>You don't have any tasks to complete.</h5>
        </div>
      )}
      <div style={{ height: 15 }} />
      {tasks.length > 0 &&
        tasks.map((task) => (
          <div key={task.key}>
            <TodoCard
              priority={task.priority}
              done={task.done}
              title={task.description}
              project={task.project}
              context={task.context}
              duedate={task.dueDate}
              time={task.time}
              completionDate={task.completionDate}
              creationDate={task.creationDate}
              id={task.key}
            />
          </div>
        ))}
    </motion.div>
  );
};

export default All;
