import React from 'react';
import Loader from 'react-loader';
import Items from '../containers/items.cont.jsx';

const {
  number, bool
} = React.PropTypes;

const Body = ({lastUpdated, isFetching}) => (
  <div>
    <div className="small">
      {
        lastUpdated &&
        <span>
          Last search at {new Date(lastUpdated).toLocaleTimeString()}.
          {' '}
        </span>
      }
    </div>
    <div>
      {
        isFetching &&
        <h3>LOADING...</h3> ||
          <Items cols={6}/>
        }
      </div>
  </div>
);

Body.propTypes = {
  lastUpdated: number,
  isFetching: bool.isRequired,
};

export default Body;
