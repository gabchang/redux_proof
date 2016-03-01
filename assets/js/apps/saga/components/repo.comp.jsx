import React from 'react';
import { Link } from 'react-router';

const {
  shape, string
} = React.PropTypes;

export default function Repo({ repo, owner }) {
  const { login } = owner;
  const { name, description } = repo;

  return (
    <div className="Repo">
      <h3>
        <Link to={`/saga/${login}/${name}`}>
          {name}
        </Link>
        {' by '}
        <Link to={`/saga/${login}`}>
          {login}
        </Link>
      </h3>
      {description &&
        <p>{description}</p>
      }
    </div>
  )
}

Repo.propTypes = {
  repo: shape({
    name: string.isRequired,
    description: string
  }),
  owner: shape({
    login: string.isRequired
  })
}
