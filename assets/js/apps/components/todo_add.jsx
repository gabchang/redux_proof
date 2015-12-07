import reactStamp from 'react-stamp';

export default React => (
  reactStamp(React).compose({
    handleClick(e) {
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
              <button onClick={this.handleClick.bind(this)} type="button" className="btn btn-secondary">
                Add
              </button>
            </span>
          </div>
        </div>
      );
    }
  })
);
