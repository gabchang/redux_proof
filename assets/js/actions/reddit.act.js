import fetch from 'isomorphic-fetch';

export const REDDIT_POSTS_REQUEST = 'REDDIT_POSTS_REQUEST';
export const REDDIT_POSTS_SUCCESS = 'REDDIT_POSTS_SUCCESS';
export const REDDIT_POSTS_FAILURE = 'REDDIT_POSTS_FAILURE';
export const REDDIT_SELECT = 'REDDIT_SELECT';
export const REDDIT_INVALIDATE = 'REDDIT_INVALIDATE';

export const selectReddit = (reddit) => {
  return {
    type: REDDIT_SELECT,
    reddit
  };
}


export const invalidateReddit = (reddit) => {
  return {
    type: REDDIT_INVALIDATE,
    reddit
  }
}

const requestPosts = (reddit) => {
  return {
    type: REDDIT_POSTS_REQUEST,
    reddit
  }
}

const receivePosts = (reddit, json) => {
  return {
    type: REDDIT_POSTS_SUCCESS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

const errorPosts = (reddit, error) => {
  return {
    type: REDDIT_POSTS_FAILURE,
    reddit,
    error: error || 'something wrong happened'
  }
}


const fetchPosts = (reddit) => {
  return dispatch => {
    dispatch(requestPosts(reddit));
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(req => req.json())
      .then(json => dispatch(receivePosts(reddit, json)))
      .catch(error => dispatch(errorPosts(reddit, error)))
  }
}

const shouldFetchPosts = (state, reddit) => {
  const  posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export const fetchPostsIfNeeded = (reddit) => {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit));
    }
  }
}
