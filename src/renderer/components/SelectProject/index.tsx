import React from 'react';
import { useSelector } from 'react-redux';

import { selectAllProjects } from '../../store/ducks/selectors';

const SelectProject: React.FC = () => {
  const projects: any = useSelector(selectAllProjects);
  console.log({ projects });

  return (
    <div>
      <h1>SelectProject</h1>
      {projects.length > 0 &&
        projects.map((project: string) => <span key={project}>{project}</span>)}
    </div>
  );
};

export default SelectProject;
