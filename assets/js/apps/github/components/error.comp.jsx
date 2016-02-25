import React from 'react';

const {
  string, func
} = React.PropTypes;


const ErrorMessage = ({ message, onClick }) => {
  return (
    <p style={{ backgroundColor: '#e99', padding: 10 }}>
      <b>{message}</b>
      {' '}
      <a href='#'
         onClick={e => {
           e.preventDefault();
           onClick();
         }}>
         Dismiss
      </a>
    </p>
  )
}


ErrorMessage.propTypes = {
  message: string,
  onClick: func.isRequired
}

export default ErrorMessage;
