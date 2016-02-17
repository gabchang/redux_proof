import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import freezeState from 'redux-freeze-state';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'middleware/logger.mdw';
import { syncHistory } from 'react-router-redux';

export default (history, initialState = {}) => {
  // Sync dispatched route actions to the history
  const store = createStore(freezeState(rootReducer),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware,
        syncHistory(history)
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // hot replacement here
  return store;
}
