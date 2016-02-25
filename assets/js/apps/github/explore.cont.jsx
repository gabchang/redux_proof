import R from 'ramda';
import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Explore from './components/explore.comp.jsx';


function mapStateToProps(state) {
  // extract either login (for user) or fullName (for repo) on github path
  let path = state.routing.location.pathname.split('/');
  const isGithub = R.indexOf('github', path) === 1;
  path = R.slice(2, 4, path).join('/');

  return {
    value: isGithub ? path : ''
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange(value) {
      dispatch(push('/github/'+value));
    }
  }
}

const CExplore = connect(mapStateToProps, mapDispatchToProps)(Explore);
CExplore.displayName = 'CExplore';

export default CExplore;
