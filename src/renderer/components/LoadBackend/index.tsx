import React, { useEffect } from 'react';
import { ipcRenderer } from 'electron';

import { useDispatch } from 'react-redux';
import TaskActions from '../../store/ducks/tasks';

const LoaderBackend: React.FC = () => {
  const dispatch = useDispatch();

  const getAllActiveTasks = () => {
    ipcRenderer.send('get-all-active-tasks');
    ipcRenderer.on('get-all-active-tasks', (_event, response) => {
      const tasks = response;

      dispatch(TaskActions.addActiveTasks(tasks));
    });
  };

  const getAllDoneTasks = () => {
    ipcRenderer.send('get-all-done-tasks');
    ipcRenderer.on('get-all-done-tasks', (_event, response) => {
      const doneTasks = response;

      dispatch(TaskActions.addDoneTasks(doneTasks));
    });
  };

  useEffect(() => {
    getAllActiveTasks();
    getAllDoneTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div style={{ display: 'none' }} />;
};

export default LoaderBackend;
