import reactStamp from 'react-stamp';

export default React => {
  const { func, string, bool } = React.PropTypes;

  return reactStamp(React).compose({
    displayName: 'TodoEdit',
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
      const {onSave} = this.props;
      if (e.which === 13) {
        onSave(this.state.text);
        if (this.props.newTodo) this.setState({ text : ''});
      }
    },

    handleChange(e) {
      this.setState({ text: e.target.value });
    },

    handleBlur(/*e*/) {
      const {newTodo, onSave} = this.props;
      if (!newTodo) {
        onSave(this.state.text);
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
};
