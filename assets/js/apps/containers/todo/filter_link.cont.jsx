import React from 'react';
import { connect } from 'react-redux';
import Link from 'apps/components/todo/link.comp.jsx';
import { setVisibilityFilter } from 'actions/action_creators';

const {
  string, func
} = React.PropTypes;

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick() {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

FilterLink.propTypes = {
  filter: string.isRequired
}

FilterLink.displayName = 'FilterLink';

export default FilterLink;
