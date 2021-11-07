import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';

// import { TodoCard } from '../../components';

const Search: React.FC = () => {
  const history = useHistory();
  const { word, page } = useSelector((state: RootStateOrAny) => state.search);

  useEffect(() => {
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
      <h1>2 results for {`"${word}"`}</h1>
    </motion.div>
  );
};

export default Search;
