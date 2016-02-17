import React from 'react';
import { connect } from 'react-redux';
import Posts from './components/posts.comp.jsx';

const mapStateToProps = (state) => {
  const { selectedReddit, postsByReddit } = state;
  return {
    posts: postsByReddit[selectedReddit].items || []
  }
};

const CPosts = connect(mapStateToProps)(Posts);

export default CPosts;
