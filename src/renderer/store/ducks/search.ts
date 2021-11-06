import { createActions, createReducer } from 'reduxsauce';

const { Types, Creators } = createActions({
  addSearchWord: ['word'],
  addPageForGoBack: ['page'],
});

export const SearchTypes = Types;

export default Creators;

const INITIAL_STATE = {
  word: '',
  page: '/',
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_SEARCH_WORD]: (state, { word }) => ({ ...state, word }),
  [Types.ADD_PAGE_FOR_GO_BACK]: (state, { page }) => ({ ...state, page }),
});
