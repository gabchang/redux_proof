/* globals window */
import R from 'ramda';

import {
  RANKIT_SEARCH_REQUEST,
  RANKIT_SEARCH_SUCCESS,
  RANKIT_SEARCH_FAILURE,
  RANKIT_SEARCH,
  RANKIT_RANK,
  RANKIT_UNRANK,
  RANKIT_SET_PAGE
  // RANKIT_INVALIDATE
} from 'actions/rankit.act';

/**
 * State shape
 *
 * {
 *   term: '',
 *   isFetching: false,
 *   result: [],
 *   movies: [<movie>],
 * }
 */

const localStore   = {
  set(collection) {
    window.localStorage.setItem('rankitRanked', R.pipe(R.filter(m => m.rank), JSON.stringify)(collection) )
  },
  get() {
    try {
      return JSON.parse(window.localStorage.getItem('rankitRanked') || '{}');
    } catch(e) {
      console.error("Unable to parse from localStorage 'rankitRanked'", e);
      return {};
    }
  }
}

const defaultState = {
  term: '',
  isFetching: false,
  result: [],
  movies: localStore.get(),
  totalResults: 0,
  page: 1
};

const searchTerm = (state = defaultState.term, action) => {
  switch (action.type) {
  case RANKIT_SEARCH:
    return action.term
  default:
    return state;
  }
}

const items = (state, action) => {
  switch (action.type) {
  // case RANKIT_INVALIDATE:
  //   return R.merge(state, { didInvalidate: true });

  case RANKIT_SEARCH_REQUEST:
    return R.merge(state, { isFetching: true });

  case RANKIT_SEARCH_SUCCESS:
    return R.merge(state, {
        isFetching: false,
        result: action.result,
        totalResults: action.totalResults,
        movies: R.mergeWith(R.merge, state.movies, action.movies),
        lastUpdated: action.receivedAt
      });
  case RANKIT_SEARCH_FAILURE:
    return R.merge(state, {
        isFetching: false,
        result: [],
        totalResults: 0,
        lastUpdated: null,
        error: action.error
      })
  case RANKIT_RANK:
  case RANKIT_UNRANK:
    var newState = R.set(R.lensPath(['movies', action.id, 'rank']), action.rank, state);
    localStore.set(newState.movies);
    return newState;
  default:
    return state;
  }
}


export const rankitSearch = (state = defaultState, action) => {
// export const rankitSearch = (state = {}, action) => {
  switch (action.type) {
  // case RANKIT_INVALIDATE:
  case RANKIT_SEARCH_REQUEST:
  case RANKIT_SEARCH_SUCCESS:
  case RANKIT_SEARCH_FAILURE:
  case RANKIT_RANK:
  case RANKIT_UNRANK:
    return R.merge(state, items(state, action));
  case RANKIT_SEARCH:
    return R.merge(state, { term: searchTerm(state, action), page: 1 });
  case RANKIT_SET_PAGE:
    return R.merge(state, { page: action.page || 1 });
  default:
    return state;
  }
}
