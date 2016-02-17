import React from 'react';
import Picker from './components/picker.comp.jsx';
import { connect } from 'react-redux';
import { selectReddit } from 'actions/reddit.act';

const mapStateToProps = (state)  => {
  const { selectedReddit } = state;
  return {
      value: selectedReddit
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange(nextReddit) {
      dispatch(selectReddit(nextReddit));
    }
  }
};

const CPicker = connect(mapStateToProps, mapDispatchToProps)(Picker);

CPicker.dispatch = 'CPicker';

export default CPicker;
