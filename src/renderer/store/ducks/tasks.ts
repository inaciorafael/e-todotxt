import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  addActiveTasks: ['tasks'],
  addDoneTasks: ['doneTasks'],
});

export const TaskTypes = Types;

export default Creators;

const INITIAL_STATE = {
  activeTasks: [],
  doneTasks: [],
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_ACTIVE_TASKS]: (state, { tasks }) => ({
    ...state,
    activeTasks: tasks,
  }),
  [Types.ADD_DONE_TASKS]: (state, { doneTasks }) => ({
    ...state,
    doneTasks,
  }),
});
