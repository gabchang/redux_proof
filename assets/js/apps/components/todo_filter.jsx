export default React => (
  ({ filter, onFilterChange, VisibilityFilters }) => {
    return (
      <p>
        Show :
        {' '}
        { renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_ALL, 'All') }
        {' '}
        { renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_COMPLETED, 'Completed') }
        {' '}
        { renderFilter(onFilterChange, filter, VisibilityFilters.SHOW_ACTIVE, 'Active') }
      </p>
    );
  }
);

function renderFilter(onFilterChange, filter, nextFilter, name) {
  if (filter === nextFilter) return name;

  return (
    <a href="#"
       onClick={getFilterHandler(nextFilter, onFilterChange)}>
       {name}
    </a>
  )
}

function getFilterHandler(nextFilter, onFilterChange) {
  return function handleFilterChange(e) {
    e.preventDefault();
    onFilterChange(nextFilter);
  }
}
