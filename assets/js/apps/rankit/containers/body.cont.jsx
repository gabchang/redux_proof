import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'actions/rankit.act';
import Body from '../components/body.comp.jsx';


const mapStateToProps = (state) => {
  // const { term, items, isFetching } = state;
  const {
    term,
    isFetching,
    lastUpdated,
    items
  } = state.rankitSearch || {
    term: '',
    isFetching: true,
    items: []
  };

  return {
    term,
    lastUpdated,
    isFetching,
    hasPost: items && items.length > 0
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRefreshClick(term) {
      dispatch(fetchPosts(term));
    }
  }
}

const CBody = connect(mapStateToProps, mapDispatchToProps)(Body);
CBody.displayName = 'Body.Container';

export default CBody;
