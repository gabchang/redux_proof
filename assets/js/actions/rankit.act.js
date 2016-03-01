import fetch from 'isomorphic-fetch';

export const RANKIT_SEARCH_REQUEST = 'RANKIT_SEARCH_REQUEST';
export const RANKIT_SEARCH_SUCCESS = 'RANKIT_SEARCH_SUCCESS';
export const RANKIT_SEARCH_FAILURE = 'RANKIT_SEARCH_FAILURE';
export const RANKIT_SEARCH         = 'RANKIT_SEARCH';
export const RANKIT_RANK           = 'RANKIT_RANK';
export const RANKIT_UNRANK         = 'RANKIT_UNRANK';
export const RANKIT_SET_PAGE       = 'RANKIT_SET_PAGE';
// export const RANKIT_INVALIDATE     = 'RANKIT_INVALIDATE';

const apiUrl = 'http://www.omdbapi.com/?';


/* entities */

import { normalize, Schema, arrayOf } from 'normalizr';
const movie = new Schema('movies', { idAttribute: 'imdbID' });

/* /entities */

export const searchTerm = (term) => {
  return {
    type: RANKIT_SEARCH,
    term
  };
}

const searchRequest = (term) => {
  return {
    type: RANKIT_SEARCH_REQUEST,
    term
  }
}

/**
 * Receives normalized items (movies)
 */
const foundItems = (term, { entities, result }, totalResults) => {
  return {
    type: RANKIT_SEARCH_SUCCESS,
    term,
    result,
    totalResults,
    movies: entities && entities.movies || {},
    receivedAt: Date.now()
  }
}

const errorItems = (term, error) => {
  return {
    type: RANKIT_SEARCH_FAILURE,
    term,
    error: error || 'something wrong happened'
  }
}

const parseFetchedItems = ({Search, totalResults}) => {
  var nb = parseInt(totalResults);
  return {
    normalized: normalize(Search, arrayOf(movie)),
    totalResults: nb || 0
  }
}

export const fetchItems = () => {
  return (dispatch, getState) => {
    var { term, page } = getState().rankitSearch;
    dispatch(searchRequest(term, page));
    if (term && term.length) {
      return fetch(`${apiUrl}s=${term}&page=${page}`)
        .then( req => req.json() )
        .then( parseFetchedItems)
        .then( ({ normalized, totalResults }) => dispatch(foundItems(term, normalized, totalResults)) )
        .catch( error => dispatch(errorItems(term, error)) )
    } else {
      return Promise.resolve({})
        .then(json => dispatch(foundItems(term, json, 0)));
    }
  }
}

export const setPage = (page) => {
  return {
    type: RANKIT_SET_PAGE,
    page
  }
}

export const rankMovie = (id, rank) => {
  return {
    type: RANKIT_RANK,
    id,
    rank
  }
}

export const unrankMovie = (id) => {
  return {
    type: RANKIT_UNRANK,
    id
  }
}
