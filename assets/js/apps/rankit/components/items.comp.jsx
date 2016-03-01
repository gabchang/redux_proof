import React from 'react';
import Item from './item.comp.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Poster: "http://ia.media-imdb.com/images/M/MV5BNjYxMjI3MzY3NF5BMl5BanBnXkFtZTgwMTgyNzg3MDE@._V1_SX300.jpg"
// Title: "Hello Ladies"
// Type: "series"
// Year: "2013–"
// imdbID: "tt2378794"

const { array, number, func } = React.PropTypes;

const Items = ({
  items,
  cols=4,
  onRankValidate,
  onRankRemove
}) => (
  <ReactCSSTransitionGroup
      component="div"
      transitionName="itemlist"
      className="row itemlist"
      transitionAppear={true}
      transitionAppearTimeout={2000}
      transitionEnterTimeout={2000}
      transitionLeaveTimeout={300}>
    { items.map( (item) => ( <Item key={item.imdbID} {...item} cols={cols} onRankValidate={onRankValidate} onRankRemove={onRankRemove}/>)) }
  </ReactCSSTransitionGroup>
)

Items.propTypes = {
  items         : array.isRequired,
  cols          : number,
  onRankValidate: func,
  onRankRemove  : func
};
Items.displayName = 'Items.Component';

export default Items
