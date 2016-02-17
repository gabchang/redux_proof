import React from 'react';
import { connect } from 'react-redux';
import Reddit from './components/reddit.comp.jsx';
import { fetchPostsIfNeeded } from 'actions/reddit.act';

const mapStateToProps = (state) => {
  return {
    selectedReddit: state.selectedReddit
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadReddit(selectedReddit) {
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }
}

const CReddit = connect(mapStateToProps, mapDispatchToProps)(Reddit);

CReddit.displayName = 'CReddit';

export default CReddit;
