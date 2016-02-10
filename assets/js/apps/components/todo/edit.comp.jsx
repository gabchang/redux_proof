import React from 'react';
import reactStamp from 'react-stamp';

const { func, string, bool } = React.PropTypes;


const Edit = reactStamp(React).compose({
  propTypes: {
    onSave: func.isRequired,
    text: string,
    newTodo: bool
  },

  defaultProps: {
    newTodo: false
  },

  init() {
    this.state = {
      text: this.props.text || ''
    };
  },

  handleSubmit(e) {
    if (e.which === 13) {
      this.props.onSave(this.state.text);
      if (this.props.newTodo) this.setState({ text : ''});
    }
  },

  handleChange(e) {
    this.setState({ text: e.target.value });
  },

  handleBlur(/*e*/) {
    if (!this.props.newTodo) {
      this.props.onSave(this.state.text);
    }
  },

  render() {
    return (
      <input
        type="text"
        className="form-control"
        autoFocus="true"
        value={this.state.text}
        onChange={e => this.handleChange(e)}
        onBlur={e => this.handleBlur(e)}
        onKeyDown={e => this.handleSubmit(e) }
        placeholder="what else ?" />
    );
  }
});

export default Edit;
