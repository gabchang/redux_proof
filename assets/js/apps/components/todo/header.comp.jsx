import React from 'react';
import Edit from './edit.comp.jsx';

const {
  func, bool
} = React.PropTypes;

const Header = ({
  onClick,
  onSave,
  showToggle
}) => (
  <div className="filter-container">
    <div className="form-group">
      <div className="input-group">
        <div className="input-group-addon"
          onClick={onClick}>
          <Toggle showToggle={showToggle} />
        </div>
        <Edit
          newTodo
          onSave={onSave}
          placeholder="what else ?" />
      </div>
    </div>
  </div>
);

Header.propTypes = {
  onClick: func.isRequired,
  onSave: func.isRequired,
  showToggle: bool
};


const Toggle = ({
  showToggle
}) => {
  if (showToggle) return (<span>&#10004;</span>);
  return (<span>&nbsp;&nbsp;&nbsp;</span>);
};

Toggle.propTypes = {
  showToggle: bool
};

Toggle.displayName = "Toggle";

export default Header;
