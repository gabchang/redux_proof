import React from 'react';
import { connect } from 'react-redux';
import { invalidateReddit, fetchPostsIfNeeded } from 'actions/reddit.act';
import Body from './components/body.comp.jsx';


const mapStateToProps = (state) => {
  const { selectedReddit, postsByReddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    lastUpdated,
    isFetching,
    hasPost: posts.length > 0
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshClick(selectedReddit) {
      dispatch(invalidateReddit(selectedReddit));
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }
}

const CBody = connect(mapStateToProps, mapDispatchToProps)(Body);
CBody.displayName = 'CBody';

export default CBody;
