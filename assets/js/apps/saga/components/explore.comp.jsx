import React from 'react';
import reactStamp from 'react-stamp';

const GITHUB_REPO = 'https://github.com/rackt/redux';

const {
  func, string
} = React.PropTypes;

const Explore = reactStamp(React)
  .compose({
    displayName: 'Explore',
    propTypes: {
      onChange: func.isRequired,
      value: string.isRequired
    },

    componentWillReceiveProps(nextProps) {
      const { value } = nextProps;
      if (value !== this.props.value) {
        this.setInputValue(value);
      }
    },

    getInputValue() {
      return this.refs.input.value;
    },

    setInputValue(val) {
      // Generally mutating DOM is a bad idea in React components
      // but doing this for a single uncontrolled field is less fuss
      // than making it controlled and maintening a state for it.
      this.refs.input.value = val;
    },

    handleKeyUp(e) {
      if (e.keyCode === 13) {
        this.handleGoClick();
      }
    },

    handleGoClick() {
      this.props.onChange(this.getInputValue());
    },

    render() {
      return (
        <div>
          <p>Type a username or repo full name and hit 'Go':</p>
          <input
            ref="input"
            defaultValue={this.props.value}
            onKeyUp={e => this.handleKeyUp(e)} />
          <button onClick={() => this.handleGoClick()}>
            Go!
          </button>
          <p>
            Code on <a href={GITHUB_REPO} target="_blanck">Github</a>.
          </p>
        </div>
      );
    }
  });


export default Explore;
