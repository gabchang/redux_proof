import reactStamp from 'react-stamp';
import createEdit from './todo_edit.comp.jsx';

export default React => {
  const { func, shape, number } = React.PropTypes;

  const Edit = createEdit(React);

  return reactStamp(React).compose({
    displayName: 'TodoHeader',
    propTypes: {
      totalCount : number.isRequired,
      actions    : shape({
        addTodo        : func.isRequired,
        completeAllTodo: func.isRequired
      }).isRequired
    },

    handleSave(text) {
      if (text.trim().length) this.props.actions.addTodo(text);
    },

    render() {
      const { actions: {completeAllTodo } } = this.props;

      return (
        <div className="filter-container">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-addon"
                onClick={completeAllTodo}>
                {this._renderToggle()}
              </div>
              <Edit
                onSave={this.handleSave.bind(this)}
                newTodo
                placeholder="what else ?" />
            </div>
          </div>
        </div>
      );
    },

    _renderToggle() {
      const { totalCount } = this.props;
      if (totalCount > 0) return (<span>&#10004;</span>);
      else return (<span>&nbsp;&nbsp;&nbsp;</span>);
    }

  });
};
