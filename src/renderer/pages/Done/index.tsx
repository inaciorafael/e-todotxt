import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import { useSelector, RootStateOrAny } from 'react-redux';
import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';

const Done: React.FC = () => {
  const { t } = useTranslation();
  const { doneTasks } = useSelector((state: RootStateOrAny) => state.tasks);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>{t('pages.done.title')}</h1>
      {doneTasks.length === 0 && (
        <div className="not-task-container d-flex align-items-center justify-content-center">
          <h5>{t('pages.done.notTasks')}</h5>
        </div>
      )}
      <div style={{ height: 15 }} />
      {doneTasks.length > 0 && (
        <h5>
          {t('pages.done.tasksInfo', { doneTasks: doneTasks.length })}{' '}
          {doneTasks.length === 1
            ? t('pages.done.task')
            : t('pages.done.tasks')}
        </h5>
      )}
      {doneTasks.length > 0 &&
        doneTasks.map((task: TaskProps) => (
          <div key={task.key}>
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
      <div style={{ height: 30 }} />
    </motion.div>
  );
};

export default Done;
