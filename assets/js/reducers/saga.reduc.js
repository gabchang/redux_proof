import * as ActionsTypes from 'actions/saga.act';
import { merge, mergeWith } from 'ramda';
import paginate from './saga_paginate.reduc';
import { combineReducers } from 'redux';



const mergeEntities = mergeWith(mergeWith(merge));

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.sagaRes && action.sagaRes.entities) {
    return mergeEntities(state, action.sagaRes.entities);
  }

  return state;
}

function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionsTypes.RESET_SAGA_ERROR_MESSAGE) {
    return null;
  } else if (error) {
    return action.error;
  }
  return state;
}


// Updates the pagination data for different actions.
const pagination = combineReducers({
  starredByUser: paginate({
    mapActionToKey: action => action.login,
    types: [
      ActionsTypes.STARRED.REQUEST,
      ActionsTypes.STARRED.SUCCESS,
      ActionsTypes.STARRED.FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionsTypes.STARGAZERS.REQUEST,
      ActionsTypes.STARGAZERS.SUCCESS,
      ActionsTypes.STARGAZERS.FAILURE
    ]
  })
});

const sagaReducer = combineReducers({
  entities,
  pagination,
  errorMessage
});

export default sagaReducer;
