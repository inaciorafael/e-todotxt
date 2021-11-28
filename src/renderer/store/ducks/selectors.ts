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

const selectAllProjects = (state: RootStateOrAny) => {
  const allTasks = selectAllTasks(state);
  const projects = allTasks.map((task) => task.project).flat();
  const listOfProjects = new Set([...projects]);

  return listOfProjects;
};

const selectAllContexts = (state: RootStateOrAny) => {
  const allTasks = selectAllTasks(state);
  const contexts = allTasks.map((task) => task.context).flat();
  const listOfContexts = new Set([...contexts]);

  return listOfContexts;
};

export {
  selectAllContexts,
  selectAllProjects,
  selectActiveTasksNumber,
  selectDoneTasksNumber,
  selectAllTasks,
  selectDoneTasks,
  selectActiveTasks,
};
