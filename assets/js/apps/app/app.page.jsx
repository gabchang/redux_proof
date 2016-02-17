import React from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';


const App = ({ location, children }) => {
  const pathname = location.pathname;
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-fixed-top navbar-dark bg-inverse">
          <div className="nav navbar-nav">
            <a className="navbar-brand" href="#">My super redux app</a>
            <Link to="/todo" className={classnames('nav-item nav-link', {active: pathname == '/todo'})}>Todo</Link>
            <Link to="/reddit" className={classnames('nav-item nav-link', {active: pathname == '/reddit'})}>Reddit</Link>
          </div>
        </nav>
      </div>
      <div style={{marginTop: '3.5em'}}>
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
