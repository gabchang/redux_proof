import React from 'react';
import R     from 'ramda';
import { connect } from 'react-redux';
import Found from '../components/found.comp.jsx';
import { setPage, fetchItems } from 'actions/rankit.act';

const perPage = 10;

const mapStateToProps = (state) => {
  const { rankitSearch: { term, result, totalResults, page } } = state;
        // nb    = result && R.length(result);

  return {
    term,
    page,
    pages: totalResults > perPage ? Math.ceil(totalResults/perPage) : 0
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadItems() {
      dispatch(fetchItems());
    },
    onPageClick(page) {
      dispatch(setPage(page));
      dispatch(fetchItems());
    }
  }
}

const CFound = connect(mapStateToProps, mapDispatchToProps)(Found);

CFound.displayName = 'Found.Container';

export default CFound;
