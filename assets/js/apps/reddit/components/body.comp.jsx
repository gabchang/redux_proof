import React from 'react';
import Loader from 'react-loader';
import Posts from '../posts.cont.jsx';

const {
  number, bool, func, string
} = React.PropTypes;

const Body = ({lastUpdated, isFetching, onRefreshClick, hasPost, selectedReddit}) => (
  <div>
    {lastUpdated &&
      <span>
        Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
        {' '}
      </span>
    }
    {!isFetching &&
      <a
        href='#'
        onClick={e => {
          e.preventDefault();
          onRefreshClick(selectedReddit);
        }}>
        Refresh
      </a>
    }
    <Loader loaded={!isFetching}>
      <Posts/>
    </Loader>
  </div>
);

Body.propTypes = {
  lastUpdated: number,
  isFetching: bool.isRequired,
  onRefreshClick: func.isRequired,
  hasPost: bool.isRequired,
  selectedReddit: string.isRequired
};

export default Body;
