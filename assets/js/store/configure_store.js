import { createStore, applyMiddleware } from 'redux';
import rootReducer from 'reducers';
import freezeState from 'redux-freeze-state';
import logger from 'middleware/logger.mdw';
import { syncHistory } from 'react-router-redux';

export default (history, initialState) => {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = syncHistory(history);
  const createStoreWithMiddleware = applyMiddleware(logger, reduxRouterMiddleware)(createStore);
  const store = createStoreWithMiddleware(freezeState(rootReducer), initialState);

  // hot replacement here
  return store;
};
