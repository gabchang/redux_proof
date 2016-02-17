import React from 'react';
import reactStamp from 'react-stamp';
import Body from '../body.cont.jsx';

const { func, string } = React.PropTypes;

const Reddit = reactStamp(React)
  .compose({
    displayName: 'Reddit',
    propTypes: {
      selectedReddit: string.isRequired,
      loadReddit: func.isRequired
    },

    componentDidMount() {
      this.props.loadReddit(this.props.selectedReddit);
    },

    componentWillReceiveProps(nextProps) {
      const { selectedReddit } = nextProps;
      if (selectedReddit !== this.props.selectedReddit) {
        this.props.loadReddit(selectedReddit);
      }
    },

    render() {
      return <Body coucou={'coucou'}/>
    }
  });

export default Reddit
