import R from 'ramda';

const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE].forEach(type => res[type] = `SAGA_${base}_${type}`);
  return res;
}

export const USER = createRequestTypes('USER');
export const REPO = createRequestTypes('REPO');
export const STARRED = createRequestTypes('STARRED');
export const STARGAZERS = createRequestTypes('STARGAZERS');

export const NAVIGATE =  'NAVIGATE'
export const LOAD_USER_PAGE = 'SAGA_LOAD_USER_PAGE';
export const LOAD_REPO_PAGE = 'SAGA_LOAD_STARRED_PAGE';
export const LOAD_MORE_STARRED = 'SAGA_LOAD_MORE_STARRED';
export const LOAD_MORE_STARGAZERS = 'SAGA_LOAD_MORE_STARGAZERS';
export const RESET_SAGA_ERROR_MESSAGE = 'SAGA_RESET_ERROR_MESSAGE';

function action(type, payload = {}) {
  return R.merge({type}, payload);
}

export const user = {
  request: login => action(USER.REQUEST, {login}),
  success: (login, response) => action(USER.SUCCESS, {login, sagaRes: response}),
  failure: (login, error) => action(USER.FAILURE, {login, error}),
};


export const repo = {
  request: fullName => action(REPO.REQUEST, {fullName}),
  success: (fullName, response) => action(REPO.SUCCESS, {fullName, sagaRes: response}),
  failure: (fullName, error) => action(REPO.FAILURE, {fullName, error}),
}

export const starred = {
  request: login => action(STARRED.REQUEST, {login}),
  success: (login, response) => action(STARRED.SUCCESS, {login, sagaRes: response}),
  failure: (login, error) => action(STARRED.FAILURE, {login, error}),
}


export const stargazers = {
  request: fullName => action(STARGAZERS.REQUEST, {fullName}),
  success: (fullName, response) => action(STARGAZERS.SUCCESS, {fullName, sagaRes: response}),
  failure: (fullName, error) => action(STARGAZERS.FAILURE, {fullName, error}),
}

export const navigate = pathname => action(NAVIGATE, {pathname})
export const loadUserPage = (login, requiredFields = []) => action(LOAD_USER_PAGE, {login, requiredFields})
export const loadRepoPage = (fullName, requiredFields = []) => action(LOAD_REPO_PAGE, {fullName, requiredFields})
export const loadMoreStarred = login => action(LOAD_MORE_STARRED, {login})
export const loadMoreStargazers = fullName => action(LOAD_MORE_STARGAZERS, {fullName})

export const resetErrorMessage = () => action(RESET_SAGA_ERROR_MESSAGE)
