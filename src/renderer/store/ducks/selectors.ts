import { RootStateOrAny } from 'react-redux';

const selectActiveTasksNumber = (state: RootStateOrAny) =>
  state.tasks.activeTasks.length;

const selectActiveTasks = (state: RootStateOrAny) => state.tasks.activeTasks;

const selectDoneTasks = (state: RootStateOrAny) => state.tasks.activeTasks;

const selectDoneTasksNumber = (state: RootStateOrAny) =>
  state.tasks.doneTasks.length;

const selectAllTasks = (state: RootStateOrAny) => [
  ...state.tasks.activeTasks,
  ...state.tasks.doneTasks,
];

export {
  selectActiveTasksNumber,
  selectDoneTasksNumber,
  selectAllTasks,
  selectDoneTasks,
  selectActiveTasks,
};
