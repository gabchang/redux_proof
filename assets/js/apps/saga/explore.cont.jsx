import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'actions/saga.act'
import Explore from './components/explore.comp.jsx';


function mapStateToProps(state) {
  // extract either login (for user) or fullName (for repo) on github path
  let path = state.routing.location.pathname.split('/');
  const isSaga = R.indexOf('saga', path) === 1;
  path = R.slice(2, 4, path).join('/');

  return {
    value: isSaga ? path : ''
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(value) {
      dispatch(navigate('/saga/'+value));
    }
  }
}

const CExplore = connect(mapStateToProps, mapDispatchToProps)(Explore);
CExplore.displayName = 'CExplore';

export default CExplore;
