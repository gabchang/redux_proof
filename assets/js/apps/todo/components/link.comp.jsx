import React from 'react';
import classnames from 'classnames';

const {
  string, func, bool
} = React.PropTypes;

const Link = ({
  active,
  onClick,
  children
}) => (
  <li className="nav-item">
    <a className={classnames('nav-link', { active: active })}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}>
      {children}
    </a>
  </li>
);

Link.propTypes = {
  active: bool,
  onClick: func.isRequired
};


export default Link;
