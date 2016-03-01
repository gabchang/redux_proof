/* global window */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'reducers';
import freezeState from 'redux-freeze-state';
import thunkMiddleware from 'redux-thunk';
import { syncHistory } from 'react-router-redux';
import api from '../middleware/api.mdw';

// import { watchAndLog } from 'actions/log.saga'
import rootSaga from '../sagas'


export default (history, initialState = {}) => {
  // Sync dispatched route actions to the history
  const store = createStore(freezeState(rootReducer),
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        api,
        createSagaMiddleware(rootSaga),
        // loggerMiddleware,
        syncHistory(history)
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // hot replacement here
  return store;
}
