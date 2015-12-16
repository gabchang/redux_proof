import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import freezeState from 'redux-freeze-state';
import logger from 'middleware/logger.mdw';

export default (initialState) => {
  console.log(rootReducer);
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(freezeState(rootReducer), initialState);

  // hot replacement here
  return store;
};
