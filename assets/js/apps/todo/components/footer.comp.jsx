import React from 'react';
import FilterLink from '../filter_link.cont.jsx';
import ClearButton from './clear_button.comp.jsx';
import { VisibilityFilters } from 'constants';

const {
  func, number
} = React.PropTypes;


const {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} = VisibilityFilters;



const Footer = ({
  activeCount,
  completedCount,
  clearCompletedTodo
}) => {
  const textItem = activeCount === 1 ? 'item' : 'items';
  return (
    <div className="row">
      <div className="col-xs-3">
        <span>
          {activeCount} {textItem} left
        </span>
      </div>
      <div className="col-xs-6">
        <ul className="nav nav-pills small">
          <FilterLink filter={SHOW_ALL}>All</FilterLink>
          <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
          <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
        </ul>
      </div>
      <div className="col-xs-3">
        <ClearButton onClick={clearCompletedTodo} completedCount={completedCount} />
      </div>
    </div>
  );
}

Footer.propTypes = {
  activeCount: number.isRequired,
  completedCount: number.isRequired,
  clearCompletedTodo: func.isRequired
};

export default Footer;
