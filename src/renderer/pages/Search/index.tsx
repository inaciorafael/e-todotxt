import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectAllTasks } from '../../store/ducks/selectors';

import { TodoCard } from '../../components';
import { TaskProps } from '../../interfaces';

const Search: React.FC = () => {
  const history = useHistory();
  const { word, page } = useSelector((state: RootStateOrAny) => state.search);
  const allTasks = useSelector(selectAllTasks);

  const [filterTasks, setFilterTasks] = useState<TaskProps[]>([]);

  const filterTasksByWord = ({ original }: { original: string }) => {
    return original.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  };

  useEffect(() => {
    setFilterTasks(allTasks.filter(filterTasksByWord));

    console.log(filterTasks);

    if (word.length === 0) {
      history.push(page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <h1>
        {filterTasks.length} {filterTasks.length === 1 ? 'result' : 'results'}{' '}
        for {`"${word}"`}
      </h1>
      {filterTasks.length > 0 &&
        filterTasks.map((task: TaskProps) => (
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

export default Search;
