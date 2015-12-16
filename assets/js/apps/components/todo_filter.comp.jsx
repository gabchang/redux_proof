import { VisibilityFilters } from 'constants';
import classnames from 'classnames';
import reactStamp from 'react-stamp';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters;
const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE] : 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

export default React => {
  const {
    string, func, shape, number
  } = React.PropTypes;

  return reactStamp(React)
    .compose({
      displayName: 'TodoFilter',
      propTypes: {
        filter         : string.isRequired,
        activeCount    : number.isRequired,
        completedCount : number.isRequired,
        actions        : shape({
          setVisibilityFilter: func.isRequired,
          clearCompletedTodo: func.isRequired
        })
      },

      handleFilterChange(nextFilter, e) {
        e.preventDefault();
        this.props.actions.setVisibilityFilter(nextFilter);
      },

      render() {

        return (
          <div className="row">
            <div className="col-xs-3">
              {this._renderTodoCount()}
            </div>
            <div className="col-xs-6">
              <ul className="nav nav-pills small">
                {this._renderFilter(SHOW_ALL)}
                {this._renderFilter(SHOW_COMPLETED)}
                {this._renderFilter(SHOW_ACTIVE)}
              </ul>
            </div>
            <div className="col-xs-3">
              {this._renderClear()}
            </div>
          </div>
        );
      },

      _renderTodoCount() {
        const { activeCount } = this.props;
        const textItem = activeCount === 1 ? 'item' : 'items';

        return (
          <span>
            {activeCount} {textItem} left
          </span>
        );
      },

      _renderFilter(filter) {
        const { filter: selectedFilter } = this.props;
        const title = FILTER_TITLES[filter];

        return (
          <li className="nav-item">
            <a className={classnames('nav-link', { active: selectedFilter === filter })}
              href="#"
              onClick={this.handleFilterChange.bind(this, filter)}>
              {title}
            </a>
          </li>
        );
      },

      _renderClear() {
        const { completedCount, actions: { clearCompletedTodo } } = this.props;
        if (completedCount === 0) return;
        return (
          <button className="clear-completed btn btn-secondary"
            onClick={clearCompletedTodo}>
            Clear completed
          </button>
        );
      }
    });

};
