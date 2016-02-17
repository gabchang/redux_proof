import R from 'ramda';

import {
  REDDIT_POSTS_REQUEST,
  REDDIT_POSTS_SUCCESS,
  REDDIT_POSTS_FAILURE,
  REDDIT_SELECT,
  REDDIT_INVALIDATE
} from 'actions/reddit.act';


// shape
// {
//   selectedSubreddit: 'frontend',
//   postsBySubreddit: {
//     frontend: {
//       isFetching: true,
//       didInvalidate: false,
//       items: []
//     },
//     reactjs: {
//       isFetching: false,
//       didInvalidate: false,
//       lastUpdated: 1439478405547,
//       items: [
//         {
//           id: 42,
//           title: 'Confusion about Flux and Relay'
//         },
//         {
//           id: 500,
//           title: 'Creating a Simple Application Using React JS and Flux Architecture'
//         }
//       ]
//     }
//   }
// }

export const selectedReddit = (state = 'reactjs', action) => {
  switch (action.type) {
  case REDDIT_SELECT:
    return action.reddit
  default:
    return state;
  }
}

const posts = (state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) => {
  switch (action.type) {
  case REDDIT_INVALIDATE:
    return R.merge(state, { didInvalidate: true });

  case REDDIT_POSTS_REQUEST:
    return R.merge(state, { isFetching: true });

  case REDDIT_POSTS_SUCCESS:
    return R.merge(state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
  case REDDIT_POSTS_FAILURE:
    return R.merge(state, {
        isFetching: false,
        didInvalidate: false,
        items: [],
        lastUpdated: null,
        error: action.error
      })
  default:
    return state;
  }
}


export const postsByReddit = (state = {}, action) => {
  switch (action.type) {
  case REDDIT_INVALIDATE:
  case REDDIT_POSTS_REQUEST:
  case REDDIT_POSTS_SUCCESS:
  case REDDIT_POSTS_FAILURE:
    return R.merge(state, {
        [action.reddit]: posts(state[action.reddit], action)
      })
  default:
    return state;
  }
}
