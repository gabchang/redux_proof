import React from 'react';
import reactStamp from 'react-stamp';
import { connect } from 'react-redux';
import Loader from 'react-loader';
import { loadRepo, loadStargazers } from 'actions/github.act';
import Repo from './components/repo.comp.jsx';
import User from './components/user.comp.jsx';
import List from './components/list.comp.jsx';

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
    loadData: func.isRequired
  },

  componentWillMount() {
    this.props.loadData(this.props.fullName)
  },

  componentWillReceiveProps(nextProps) {
    const { fullName } = nextProps;
    if (fullName !== this.props.fullName) {
      this.props.loadData(fullName);
    }
  },

  handleLoadMoreClick() {
    this.props.loadMore(this.props.fullName);
  },

  render() {
    const { repo, owner, name } = this.props;
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
          onLoadMoreClick={() => this.handleLoadMoreClick()}
          {...stargazersPagination} />
      </div>
    );
  }
});



// ownProps from router
function mapStateToProps(state, ownProps) {
  const { login, name } = ownProps.params;
  const {
    pagination: { stargazersByRepo },
    entities: { users, repos }
  } = state.github;

  const fullName = `${login}/${name}`;
  const stargazersPagination = stargazersByRepo[fullName] || { ids: [] };
  const stargazers = stargazersPagination.ids.map( id => users[id] );

  return {
    fullName,
    name,
    stargazers,
    stargazersPagination,
    repo: repos[fullName],
    owner: users[login]
  }
}


function mapDispatchToProps(dispatch) {
  return {
    loadData(fullName) {
      dispatch(loadRepo(fullName));
      dispatch(loadStargazers(fullName))
    },

    loadMore(fullName) {
      dispatch(loadStargazers(fullName, true));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoPage);
