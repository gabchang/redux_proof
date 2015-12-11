import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import logger from 'middleware/logger.mdw';

export default (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(rootReducer, initialState);

  // hot replacement here
  return store;
};
