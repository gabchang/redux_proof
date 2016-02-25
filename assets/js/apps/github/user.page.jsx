import React from 'react';
import reactStamp from 'react-stamp';
import { connect } from 'react-redux';
import { loadUser, loadStarred } from 'actions/github.act';
import Loader from 'react-loader';
import User from './components/user.comp.jsx';
import List from './components/list.comp.jsx';
import Repo from './components/repo.comp.jsx';
import { zip } from 'ramda';

const {
  func, string, object, array
} = React.PropTypes;



const UserPage = reactStamp(React).compose({
  displayName: 'UserPage',
  propTypes: {
    login: string.isRequired,
    user: object,
    loadData: func.isRequired,
    starredPagination: object.isRequired,
    starredRepos: array.isRequired,
    starredRepoOwners: array.isRequired
  },

  componentWillMount() {
    this.props.loadData(this.props.login);
  },

  componentWillReceiveProps(nextProps) {
    const { login } = nextProps;
    if (login !== this.props.login) {
      this.props.loadData(login);
    }
  },

  handleLoadMoreClick() {
    this.props.loadMore(this.props.login);
  },

  render() {
    const { user, login } = this.props;
    if (!user) return <Loader />

    const { starredRepos, starredRepoOwners, starredPagination } = this.props;
    return (
      <div>
        <User user={user} />
        <hr/>
        <List
          renderItem={renderRepo}
          items={zip(starredRepos, starredRepoOwners)}
          onLoadMoreClick={::this.handleLoadMoreClick}
          {...starredPagination}/>
      </div>
    )
  }
});


function renderRepo([ repo, owner ]) {
  return (
    <Repo
      repo={repo}
      owner={owner}
      key={repo.fullName} />
  )
}



function mapStateToProps(state, ownProps) {
  const { login } = ownProps.params;
  const {
    pagination: { starredByUser },
    entities: { users, repos }
  } = state.github;

  const starredPagination = starredByUser[login] || { ids: [] }
  const starredRepos = starredPagination.ids.map(id => repos[id]);
  const starredRepoOwners = starredRepos.map( repo => users[repo.owner]);
  return {
    login,
    user: users[login],
    starredRepos,
    starredRepoOwners,
    starredPagination
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData(login) {
      dispatch(loadUser(login, ['name']));
      dispatch(loadStarred(login));
    },

    loadMore(login) {
      dispatch(loadStarred(login, true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
