import React from 'react';
import { motion } from 'framer-motion';

import { useSelector } from 'react-redux';
import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';
import { selectActiveTasks } from '../../store/ducks/selectors';

const All: React.FC = () => {
  const activeTasks = useSelector(selectActiveTasks);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>All</h1>
      {activeTasks.length === 0 && (
        <div className="not-task-container d-flex align-items-center justify-content-center">
          <h5>You don't have any activeTasks to complete.</h5>
        </div>
      )}
      {activeTasks.length > 1 && (
        <h5>
          You have {activeTasks.length} active{' '}
          {activeTasks.length === 1 ? 'task' : 'tasks'}
        </h5>
      )}
      <div style={{ height: 15 }} />
      {activeTasks.length > 0 &&
        activeTasks.map((task: TaskProps) => (
          <div key={task.original}>
            <TodoCard
              priority={task.priority}
              done={task.done}
              title={task.description}
              project={task.project}
              context={task.context}
              duedate={task.dueDate}
              time={task.time}
              completionDate={task.completionDate}
              // creationDate={task.creationDate}
              // id={task.key}
            />
          </div>
        ))}
    </motion.div>
  );
};

export default All;
