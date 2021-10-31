import { combineReducers } from 'redux';

import { reducer as authenticate } from './authenticate';

export default combineReducers({
  authenticate,
});
