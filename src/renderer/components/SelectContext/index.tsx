import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllContexts } from '../../store/ducks/selectors';

const SelectContext: React.FC = () => {
  const contexts: any = useSelector(selectAllContexts);

  return (
    <div>
      <h1>SelectContext</h1>
      {contexts.length > 0 &&
        contexts.map((context: string) => <span key={context}>{context}</span>)}
    </div>
  );
};

export default SelectContext;
