import reactStamp from 'react-stamp';
import todoEdit from './todo_edit.comp.jsx';

export default React => {
  const {
    func, bool, string, shape, number
  } = React.PropTypes;

  const TodoEdit = todoEdit(React);

  return reactStamp(React)
    .compose({
      displayName: 'Todo',

      propTypes: {
        actions: shape({
          toggleCompleteTodo : func.isRequired,
          updateTodo         : func.isRequired,
        }),
        todoId: number.isRequired,
        completed : bool.isRequired,
        text      : string.isRequired
      },

      init() {
        this.state = {
          editing : false
        };
      },

      handleDoubleClick(/*e*/) {
        this.setState({ editing : true });
      },

      handleSave(text) {
        if (text.length) {
          this.props.actions.updateTodo(this.props.todoId, text);
        }
        this.setState({ editing: false });
      },

      render() {
        const {completed} = this.props;
        return (
          <li className="list-group-item"
              style={{
                textDecoration: completed ? 'line-through': 'none',
                cursor: completed ? 'default' : 'pointer'
              }}>
              {this._renderShow()}
              {this._renderEdit()}
          </li>
        );
      },

      _renderEdit() {
        if (!this.state.editing) return false;
        return (
          <TodoEdit
            onSave={this.handleSave.bind(this)}
            text={this.props.text}
            />
        );
      },

      _renderShow() {
        if (this.state.editing) return false;

        const {completed, text, actions, todoId } = this.props;
        return (
          <div>
            <input type="checkbox"
              className="toggle"
               onClick={() => actions.toggleCompleteTodo(todoId)}
               checked={completed} />
            <label onDoubleClick={this.handleDoubleClick.bind(this)}>
              {text}
            </label>
            <button className="destroy"></button>
          </div>
        );
      }
    });
};
