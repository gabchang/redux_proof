import * as ActionsTypes from 'actions/github.act';
import { mapObjIndexed, merge, prop, mergeWith } from 'ramda';
import paginate from './github_paginate.reduc';
import { combineReducers } from 'redux';


/**
 * entities is list of entity (users, repos)
 * make a deep merge to avoid loosing data
 * state = {
 *   users:
 * }
 * @param {Object} state
 * @param {Object} entities
 * @return {Object}
 */
function mergeEntities(state, entities) {
  // return mapObjIndexed((entity, entityName) => mergeEntity(prop(entityName, state) || {}, entity), entities);
  return mapObjIndexed((entity, entityName) => mergeEntity(prop(entityName, state) || {}, entity), entities);
}

/**
 * append new entity items to entity (from action response)
 * if item already present in state, merge items together merge(stateItem, entityItem)
 *
 * entity is list of data sharing same entity, indexed by idAttribute of schema (see normalizr)
 * entity contains list of items indexed by idAttribute
 *
 * @param {Object} state
 * @param {Object} entity
 * @return {Object}
 */
function mergeEntity(state, entity) {
  console.log('mergeEntity', state, entity)

  return mergeWith(merge, state, entity);
}

const myMergeEntities = mergeWith(mergeWith(merge));

// Updates an entity cache in response to any action with response.entities.
function entities(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return myMergeEntities(state, action.response.entities);
    // return mergeEntities(state, action.response.entities);
  }

  return state;
}

function errorMessage(state = null, action) {
  const { type, error } = action;

  if (type === ActionsTypes.RESET_ERROR_MESSAGE) {
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
      ActionsTypes.STARRED_REQUEST,
      ActionsTypes.STARRED_SUCCESS,
      ActionsTypes.STARRED_FAILURE
    ]
  }),
  stargazersByRepo: paginate({
    mapActionToKey: action => action.fullName,
    types: [
      ActionsTypes.STARGAZERS_REQUEST,
      ActionsTypes.STARGAZERS_SUCCESS,
      ActionsTypes.STARGAZERS_FAILURE
    ]
  })
});

const githubReducer = combineReducers({
  entities,
  pagination,
  errorMessage
});

export default githubReducer;
