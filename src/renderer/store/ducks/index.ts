import { combineReducers } from 'redux';

import { reducer as authenticate } from './authenticate';
import { reducer as search } from './search';

export default combineReducers({
  authenticate,
  search,
});
