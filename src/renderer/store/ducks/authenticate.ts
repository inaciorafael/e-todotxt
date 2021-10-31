import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  login: ['user'],
});

export const AuthenticateTypes = Types;

export default Creators;

const INITIAL_STATE = {
  username: '',
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN]: (state, { user }) => ({ ...state, user }),
});
