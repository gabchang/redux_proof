import React from 'react';
import { Link } from 'react-router';

const {
  string, shape
} = React.PropTypes;

export default function User({ user: {login, avatarUrl, name} }) {
  return (
    <div className="User">
      <Link to={'/saga/' + login}>
        <img src={avatarUrl} width="72" height="72" />
        <h3>
          {login} { name && <span>({name})</span>}
        </h3>
      </Link>
    </div>
  )
}

User.propTypes = {
  user: shape({
    login: string.isRequired,
    avatarUrl: string.isRequired,
    name: string
  }).isRequired
};
