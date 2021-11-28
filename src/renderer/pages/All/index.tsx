import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';
import { selectActiveTasks } from '../../store/ducks/selectors';

const All: React.FC = () => {
  const { t } = useTranslation();

  const activeTasks = useSelector(selectActiveTasks);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>{t('pages.all.title')}</h1>
      {activeTasks.length === 0 && (
        <div className="not-task-container d-flex align-items-center justify-content-center">
          <h5>{t('pages.all.dontTasks')}</h5>
        </div>
      )}
      {activeTasks.length > 1 && (
        <h5>
          {t('pages.all.tasksInfo', { activeTasks: activeTasks.length })}{' '}
          {activeTasks.length === 1
            ? t('pages.all.task')
            : t('pages.all.tasks')}
        </h5>
      )}
      <div style={{ height: 15 }} />
      {activeTasks.length > 0 &&
        activeTasks.map((task: TaskProps) => (
          <div key={task.original}>
            <TodoCard
              original={task.original}
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
