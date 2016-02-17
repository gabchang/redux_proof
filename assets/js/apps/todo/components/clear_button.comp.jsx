import React from 'react';

const {
  func, number
} = React.PropTypes;


const ClearButton = ({
  completedCount,
  onClick
}) => {
  if (!completedCount) return <span/>;

  return (
    <button className="clear-completed btn btn-secondary"
      onClick={onClick}>
      Clear completed
    </button>
  );
}

ClearButton.propTypes  = {
  completedCount: number.isRequired,
  onClick: func.isRequired
};

export default ClearButton;
