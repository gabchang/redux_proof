import React from 'react';
import reactStamp from 'react-stamp';
import Body  from '../containers/body.cont.jsx';
import Pager from './pager.comp.jsx';

const { func, string, number } = React.PropTypes;

const Found = reactStamp(React)
  .compose({

    displayName: 'Found.Component',

    propTypes: {
      term       : string.isRequired,
      pages      : number,
      page       : number,
      loadItems  : func.isRequired,
      onPageClick: func
    },

    defaultProps: {
      pages: 0
    },

    componentDidMount() {
      // this.props.loadItems(this.props.term);
    },

    componentWillReceiveProps(nextProps) {
      const { term } = nextProps;
      if (term !== this.props.term) {
        this.props.loadItems(term);
      }
    },

    render() {
      const {pages, page, onPageClick} = this.props;
      return (
        <div>
          <center>
            <Pager pages={pages} page={page} onClick={onPageClick}/>
          </center>
          <Body/>
        </div>
      );
    }
  });

export default Found
