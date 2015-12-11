import reactStamp from 'react-stamp';

export default React => {
  const { func } = React.PropTypes;

  return reactStamp(React).compose({
    propTypes: {
      onAddClick: func.isRequired
    },

    handleClick(/*e*/) {
      const node = this.refs.input,
            text = node.value.trim();

      this.props.onAddClick(text);
      node.value = '';
    },

    render() {
      return (
        <div className="row">
          <div className="input-group">
            <input type="text" ref="input" className="form-control"/>
            <span className="input-group-btn">
              <button onClick={(e) => this.handleClick(e)} type="button" className="btn btn-secondary">
                Add
              </button>
            </span>
          </div>
        </div>
      );
    }
  });
};
