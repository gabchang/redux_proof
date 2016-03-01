import React from 'react';
import R     from 'ramda';
import { connect } from 'react-redux';
import Items from '../components/items.comp.jsx';
import { rankMovie, unrankMovie } from 'actions/rankit.act';

const mapStateToProps = (state) => {
  const { rankitSearch: { result, movies } } = state;
  return {
    items : result && result.map( id => movies[id] ) || []
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRankValidate(imdbID, rank) {
      dispatch(rankMovie(imdbID, rank));
    },
    onRankRemove(imdbID) {
      dispatch(unrankMovie(imdbID));
    }
  }
};

const CItems = connect(mapStateToProps, mapDispatchToProps)(Items);
CItems.displayName = 'Items.Container';

export default CItems;
