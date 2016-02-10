import React from 'react';

const TodoShow = ({completed, children, onClick, onDoubleClick}) => {
  return (
    <div>
      <input type="checkbox"
        className="toggle"
         onClick={onClick}
         checked={completed} />
       <label onDoubleClick={onDoubleClick}>
        {children}
      </label>
      <button className="destroy"></button>
    </div>
  );
}

export default TodoShow;
