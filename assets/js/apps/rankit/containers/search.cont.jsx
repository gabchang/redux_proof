import React from 'react';
import Search from '../components/search.comp.jsx';
import { connect } from 'react-redux';
import { searchTerm, fetchItems } from 'actions/rankit.act';

const mapStateToProps = (state)  => {
  const { term } = state;
  return {
      value: term
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(newTerm) {
      dispatch(searchTerm(newTerm));
      dispatch(fetchItems());
    }
  }
};

const CSearch = connect(mapStateToProps, mapDispatchToProps)(Search);

CSearch.dispatch = 'CSearch';

export default CSearch;
