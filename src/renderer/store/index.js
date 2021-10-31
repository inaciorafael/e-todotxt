import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import storage from 'redux-persist/lib/storage';
import reducers from './ducks';

const persistConfig = {
  key: 'root',
  storage,
};

const logger = createLogger({ collapsed: true });

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const store = createStoreWithMiddleware(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};
