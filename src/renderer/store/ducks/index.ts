import { combineReducers } from 'redux';

import { reducer as tasks } from './tasks';
import { reducer as search } from './search';

export default combineReducers({
  tasks,
  search,
});
