import React from 'react';
import { connect } from 'react-redux';
import Items from '../components/items.comp.jsx';
import R from 'ramda';
import { rankMovie, unrankMovie } from 'actions/rankit.act';

const mapStateToProps = (state) => {
  const { rankitSearch: { movies } } = state,
        ranked = R.pipe(
          R.filter( m => m.rank ),
          R.values,
          R.sortBy( m => m.rank*-1 )
        )(movies);
  return {
    items: ranked ? ranked : [],
    cols : 6
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRankValidate(imdbID, rank) {
      dispatch(rankMovie(imdbID, rank));
    },
    onRankRemove(imdbID) {
      dispatch(unrankMovie(imdbID));
    }
  }
}

const CRankit = connect(mapStateToProps, mapDispatchToProps)(Items);

CRankit.displayName = 'MyRank.Container';

export default CRankit;
