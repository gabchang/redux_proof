import React from 'react';
import reactStamp from 'react-stamp';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { loadRepoPage, loadMoreStargazers } from 'actions/saga.act';
import Repo from './components/repo.comp.jsx';
import User from './components/user.comp.jsx';
import List from './components/list.comp.jsx';

import { getRepo, getUser, getEntity, getStargazersByRepo } from 'reducers/saga_selectors';

const {
  object, string, func, array
} = React.PropTypes;

const RepoPage = reactStamp(React).compose({
  displayName: 'RepoPage',
  propTypes: {
    repo: object,
    fullName: string.isRequired,
    name: string.isRequired,
    owner: object,
    stargazers: array.isRequired,
    stargazersPagination: object,
    loadPage: func.isRequired,
    loadMore: func.isRequired
  },

  componentWillMount() {
    this.props.loadPage(this.props.fullName)
  },

  componentWillReceiveProps(nextProps) {
    const { fullName } = nextProps;
    if (fullName !== this.props.fullName) {
      this.props.loadPage(fullName);
    }
  },

  handleLoadMoreClick() {
    this.props.loadMore(this.props.fullName);
  },

  render() {
    const { repo, owner } = this.props;
    if (!repo || !owner) return <Loader />;

    const { stargazers, stargazersPagination } = this.props;

    return (
      <div>
        <Repo
          repo={repo}
          owner={owner} />
        <hr />
        <List
          renderItem={user => <User user={user} key={user.login} />}
          items={stargazers}
          onLoadMoreClick={::this.handleLoadMoreClick}
          {...stargazersPagination} />
      </div>
    );
  }
});



// ownProps from router
function mapStateToProps(state, ownProps) {
  const { login, name } = ownProps.params;

  const fullName = `${login}/${name}`;
  const users = getEntity(state, 'users');
  const stargazersPagination = getStargazersByRepo(state, fullName);
  const stargazers = stargazersPagination.ids.map( id => users[id] );

  return {
    fullName,
    name,
    stargazers,
    stargazersPagination,
    repo: getRepo(state, fullName),
    owner: getUser(state, login)
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadPage(fullName) {
      dispatch(loadRepoPage(fullName));
    },

    loadMore(fullName) {
      dispatch(loadMoreStargazers(fullName));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);
