import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';


const App = ({ location, children }) => {
  const pathname = location.pathname;
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-dark">
          <div className="nav nav-inline navbar-nav">
            <a className="navbar-brand" href="#">RedUX</a>
            <Link to="/todo" className={classnames('nav-item nav-link', {active: pathname == '/todo'})}>Todo</Link>
            <Link to="/reddit" className={classnames('nav-item nav-link', {active: pathname == '/reddit'})}>Reddit</Link>
            <Link to="/rankit" className={classnames('nav-item nav-link', {active: pathname == '/rankit'})}>Rank-it</Link>
          </div>
        </nav>
      </div>
      <div className="container" style={{marginTop: '4em'}}>
        {children}
      </div>
    </div>
  );
};

const { node } = React.PropTypes;

App.propTypes = {
  children: node
};

export default App;
