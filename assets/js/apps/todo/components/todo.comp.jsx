import React from 'react';
import reactStamp from 'react-stamp';
import Edit from './edit.comp.jsx';
import Show from './show.comp.jsx';

const {
  func, bool, string, number
} = React.PropTypes;



const Todo = reactStamp(React)
  .compose({
    displayName: 'Todo',

    propTypes: {
      onSave    : func.isRequired,
      onClick   : func.isRequired,
      completed : bool.isRequired,
      text      : string.isRequired
    },

    init() {
      this.state = {
        editing : false
      };
    },

    handleSave(text) {
      if (text.length) {
        this.props.onSave(text);
      }
      this.setState({ editing: false });
    },

    render() {
      const { completed } = this.props;
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
        <Edit
          onSave={text => this.handleSave(text)}
          text={this.props.text}
          />
      );
    },

    _renderShow() {
      if (this.state.editing) return false;
      const { completed, text } = this.props;
      return (
        <Show
          completed={completed}
          onDoubleClick={() => this.setState({ editing: true }) }
          onClick={() => this.props.onClick() }
        >
          {text}
        </Show>
      );
    }
  });


export default Todo;
