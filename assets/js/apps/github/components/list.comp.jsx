import React from 'react';
import reactStamp from 'react-stamp';
import Loader from 'react-loader';

const {
  array, number, bool, func
} = React.PropTypes;


const List = reactStamp(React).compose({
  displayName: 'List',
  propTypes: {
    items: array.isRequired,
    pageCount: number.isRequired,
    isFetching: bool.isRequired,
    onLoadMoreClick: func.isRequired,
    renderItem: func.isRequired
  },

  defaultProps: {
    isFetching: true
  },

  renderLoadMore() {
    const { isFetching, onLoadMoreClick } = this.props;
    return (
      <button
        style={{ fontSize: '150%'}}
        onClick={onLoadMoreClick}
        disabled={isFetching}>
        {isFetching ? 'Loading...' : 'Load More'}
      </button>
    )
  },

  renderItem(item) {
    return this.props.renderItem(item);
  },

  render() {
    const {
      isFetching, pageCount,
      items, nextPageUrl
    } = this.props;

    const isEmpty = items.length === 0;
    if (isEmpty && isFetching) {
      return <Loader />;
    }

    const isLastPage = !nextPageUrl;
    if (isEmpty && isLastPage) {
      return <h1><i>Nothing here !</i></h1>
    }

    return (
      <div>
        {items.map(this.renderItem.bind(this))}
        {pageCount > 0 && !isLastPage && this.renderLoadMore()}
      </div>
    )
  }
});

export default List;
